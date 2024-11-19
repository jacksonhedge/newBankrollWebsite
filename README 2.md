# Bankroll Website

## Project Structure

```
bankroll-website/
├── public/               # Static assets
│   └── images/          # Image assets
├── src/                 # Frontend source code
│   ├── components/      # Reusable React components
│   ├── contexts/        # React context providers
│   ├── layouts/         # Layout components
│   ├── pages/          # Page components
│   ├── services/       # Frontend services (Firebase, API)
│   ├── styles/         # CSS and style files
│   ├── types/          # TypeScript types/interfaces
│   └── utils/          # Utility functions
├── server/             # Backend source code
│   ├── config/         # Server configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Express middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
└── config files        # Various configuration files (vite, tailwind, etc.)
```

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend development server
- `npm run dev:full` - Start both frontend and backend servers
- `npm run build` - Build the frontend for production
- `npm start` - Start the production server
- `npm run preview` - Preview the production build locally

## Tech Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Backend: Express.js
- Authentication: Firebase
- Build Tool: Vite
