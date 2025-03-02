# Donation Page

A simple, static donation page built with React, TypeScript, and Vite for GitHub Pages. This page allows you to showcase your projects and provide cryptocurrency donation options to your supporters.

## Features

- Responsive design using Tailwind CSS
- Cryptocurrency donation options with copy-to-clipboard functionality
- Projects showcase with GitHub links
- Easy deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/donate.git
   cd donate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/donate/` to see the page.

## Customization

### Donation Methods

Edit the `donationMethods` array in `src/components/DonationMethods.tsx` to add your own cryptocurrency addresses.

### Projects

Edit the `projects` array in `src/components/ProjectsList.tsx` to showcase your own projects.

## Deployment

This project is configured for easy deployment to GitHub Pages using GitHub Actions. When you push to the `main` branch, the site will automatically be built and deployed.

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages and select "GitHub Actions" as the source
4. Your site will be available at `https://yourusername.github.io/donate/`

## License

MIT

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
