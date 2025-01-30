import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import PlatformImageService from '../services/firebase/PlatformImageService';
import { ALL_PLATFORMS, PLATFORM_CATEGORIES } from '../data/platforms';

const PlatformsContext = createContext();

// Define custom category order
const categoryOrder = ['ALL', 'SWEEPS_CASINO', 'FANTASY', 'CASINO', 'SPORTS'];

export const categories = categoryOrder.map(id => ({
  id,
  label: id === 'SWEEPS_CASINO' ? 'SWEEPS CASINO' : id
}));

export const platforms = ALL_PLATFORMS.map(platform => ({
  ...platform,
  imageUrl: `/images/${platform.imageFile}` // Use the imageFile property from platforms data
}));

export function PlatformsProvider({ children }) {
  const [platformImages, setPlatformImages] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const loadingRef = useRef(false);
  const imageUrlCache = useRef({});
  const updateTimeoutRef = useRef(null);

  // Debounced state update function
  const debouncedSetImagesLoaded = (count) => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    updateTimeoutRef.current = setTimeout(() => {
      setImagesLoaded(count);
    }, 500); // Debounce for 500ms
  };

  useEffect(() => {
    const loadPlatformImages = async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      setImagesLoading(true);
      const imageUrls = { ...imageUrlCache.current };
      const errors = {};
      let loadedCount = 0;
      const batchSize = 5; // Load images in batches of 5

      try {
        // Process platforms in batches
        for (let i = 0; i < platforms.length; i += batchSize) {
          const batch = platforms.slice(i, i + batchSize);
          
          // Load batch of images concurrently
          await Promise.all(
            batch.map(async (platform) => {
              if (imageUrlCache.current[platform.id]) {
                loadedCount++;
                return;
              }

              try {
                // Try to load image using platform's imageFile
                const url = await PlatformImageService.getImageUrl(platform.imageFile);
                if (url) {
                  imageUrls[platform.id] = url;
                  imageUrlCache.current[platform.id] = url;
                  loadedCount++;
                }
              } catch (error) {
                console.error(`Failed to load image for ${platform.id}:`, error);
                errors[platform.id] = true;
              }
            })
          );

          // Update loaded count less frequently using debounce
          debouncedSetImagesLoaded(loadedCount);

          // Add delay between batches to prevent overwhelming mobile devices
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } finally {
        setPlatformImages(imageUrls);
        setImageErrors(errors);
        setImagesLoading(false);
        setImagesLoaded(loadedCount);
        loadingRef.current = false;
      }
    };

    loadPlatformImages();

    return () => {
      loadingRef.current = false;
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  const value = {
    platforms,
    categories,
    platformImages,
    imagesLoading,
    imagesLoaded,
    imageErrors,
    totalPlatforms: platforms.length
  };

  return (
    <PlatformsContext.Provider value={value}>
      {children}
    </PlatformsContext.Provider>
  );
}

export function usePlatforms() {
  const context = useContext(PlatformsContext);
  if (context === undefined) {
    throw new Error('usePlatforms must be used within a PlatformsProvider');
  }
  return context;
}
