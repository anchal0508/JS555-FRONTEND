# JS555 Frontend

Frontend application built with React, TypeScript, and Vite. I built this project to handle real-world workflows like AI-assisted insights, payment processing, media uploads, and strict client-side form validation.

Live Demo: https://abcrob.in

## What it does & Technical Decisions

Instead of a basic CRUD setup, this project focuses on how different third-party services work together cleanly on the frontend:

- **AI Integration (Gemini):** Used to process user inputs and generate smart suggestions/responses directly within the app flow.
- **Payments (Razorpay):** Integrated Razorpay checkout for handling transactions securely on the client side.
- **Media Handling (Cloudinary):** Offloaded image uploads and optimization to Cloudinary so the main server stays lightweight.
- **Data Fetching (React Query):** Replaced manual `useEffect` fetching with TanStack Query for proper caching, loading states, and background re-fetching.
- **Forms & Validation (React Hook Form + Zod):** Used schema-based validation with Zod to catch bad inputs before they hit the API and prevent unnecessary re-renders.
- **Styling (Tailwind CSS):** Kept the UI responsive and consistent without writing bloated custom CSS files.

## Tech Stack

- **Core:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **State / API:** TanStack Query (React Query)
- **Forms:** React Hook Form, Zod
- **Services:** Google Gemini API, Razorpay, Cloudinary
- **Linting:** Oxlint

## Running it locally

1. **Clone the repo**
   ```bash
   git clone https://github.com
   cd JS555-FRONTEND
   ```

2. **Install packages**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root folder and add your keys:
   ```env
   VITE_API_BASE_URL=
   VITE_RAZORPAY_KEY_ID=
   VITE_CLOUDINARY_CLOUD_NAME=
   VITE_GEMINI_API_KEY=
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Bundles the app for production
- `npm run lint` - Runs Oxlint to catch code issues
- `npm run preview` - Locally preview the production build

## Folder Structure

```text
src/
├── components/   # Reusable UI components
├── pages/        # Route-level views
├── hooks/        # Custom hooks and React Query setups
├── utils/        # Helper functions and Zod schemas
└── App.tsx       # Main app routing and layout
```

## Contact

Built by **Anchal**  
GitHub: https://github.com
