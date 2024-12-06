import{u as F,i as L,r as a,j as e,C as i,f as o,L as r}from"./index-dYk9kCLd-1733463520759.js";import{g as G}from"./GroupService-3YmGnRXY-1733463520759.js";import{f as R}from"./FriendsService-BhH8eXDl-1733463520759.js";const B=()=>{const{currentUser:s,updateProfile:y,signOut:j}=F(),N=L(),[n,w]=a.useState((s==null?void 0:s.displayName)||""),[d,v]=a.useState((s==null?void 0:s.photoURL)||""),[x,m]=a.useState(""),[h,u]=a.useState(""),[g,p]=a.useState(!1),[b,S]=a.useState([]),[f,k]=a.useState([]);a.useEffect(()=>{const t=async()=>{try{const l=await G.getUserGroups(s.uid);S(l)}catch(l){console.error("Error fetching groups:",l)}},c=async()=>{try{const l=await R.getFriendsList(s.uid);k(l)}catch(l){console.error("Error fetching friends:",l)}};s&&(t(),c())},[s]);const E=async t=>{t.preventDefault(),m(""),u(""),p(!0);try{await y({displayName:n,photoURL:d}),u("Profile updated successfully!")}catch(c){m("Failed to update profile"),console.error("Error updating profile:",c)}finally{p(!1)}},P=async()=>{try{await j(),N("/login")}catch(t){console.error("Error signing out:",t)}},C=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t||0);return e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8 text-white",children:"Profile"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"Profile Information"}),e.jsxs("form",{onSubmit:E,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Display Name"}),e.jsx("input",{type:"text",value:n,onChange:t=>w(t.target.value),className:"mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Photo URL"}),e.jsx("input",{type:"text",value:d,onChange:t=>v(t.target.value),className:"mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"})]}),x&&e.jsx("div",{className:"text-red-500 text-sm",children:x}),h&&e.jsx("div",{className:"text-green-500 text-sm",children:h}),e.jsx("button",{type:"submit",disabled:g,className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50",children:g?"Updating...":"Update Profile"})]})]})}),e.jsx(i,{children:e.jsxs(o,{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"Account Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email"}),e.jsx("p",{className:"mt-1 text-white",children:s==null?void 0:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Account Balance"}),e.jsx("p",{className:"mt-1 text-white",children:C(s==null?void 0:s.dwollaBalance)})]}),e.jsx(r,{to:"/payment-methods",className:"block w-full bg-green-600 text-center text-white py-2 px-4 rounded-md hover:bg-green-700",children:"Payment Methods"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{to:"/notifications",className:"block w-full bg-gray-600 text-center text-white py-2 px-4 rounded-md hover:bg-gray-700",children:"Settings"}),e.jsx(r,{to:"/gift-card",className:"block w-full bg-gray-600 text-center text-white py-2 px-4 rounded-md hover:bg-gray-700",children:"View Gift Card"})]})]})]})}),e.jsx(i,{children:e.jsxs(o,{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"My Groups"}),b.length>0?e.jsx("ul",{className:"space-y-2",children:b.map(t=>e.jsx("li",{className:"text-white",children:t.name},t.id))}):e.jsx("p",{className:"text-gray-400",children:"No groups joined yet"}),e.jsx(r,{to:"/groups",className:"mt-4 block w-full bg-blue-600 text-center text-white py-2 px-4 rounded-md hover:bg-blue-700",children:"View All Groups"})]})}),e.jsx(i,{children:e.jsxs(o,{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"My Friends"}),f.length>0?e.jsx("ul",{className:"space-y-2",children:f.map(t=>e.jsx("li",{className:"text-white",children:t.displayName||t.email},t.uid))}):e.jsx("p",{className:"text-gray-400",children:"No friends added yet"}),e.jsx(r,{to:"/friends",className:"mt-4 block w-full bg-blue-600 text-center text-white py-2 px-4 rounded-md hover:bg-blue-700",children:"Manage Friends"})]})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:P,className:"bg-red-600 text-white py-2 px-8 rounded-md hover:bg-red-700 transition-colors duration-200",children:"Sign Out"})})]})})};export{B as default};