
# Modern Portfolio Website

A responsive portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui components. Features include:
- Dark/Light theme with automatic switching based on time of day
- Responsive design
- Animated sections
- Contact form
- Project showcase
- Skills display

## Prerequisites

Make sure you have Node.js installed. If not, you can [install it using nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

## Getting Started

1. Clone this repository to your local machine:
```sh
git clone <YOUR_REPOSITORY_URL>
```

2. Navigate to the project directory:
```sh
cd modern-portfolio
```

3. Install the dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

5. Open your browser and visit:
```
http://localhost:8080
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run serve` - Serves the production build locally
- `npm run lint` - Runs the linter
- `npm run type-check` - Runs TypeScript type checking

## Project Structure

```
src/
  ├── components/     # React components
  ├── hooks/         # Custom React hooks
  ├── lib/           # Utility functions
  ├── pages/         # Page components
  └── styles/        # CSS and styling files
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Vite

## Making Changes

Feel free to modify the code to match your needs:

1. Update personal information in the components
2. Modify the theme colors in `tailwind.config.ts`
3. Add your own projects in the `projectsData` array in `Projects.tsx`
4. Customize the skills in `About.tsx`

## Contributing

If you find any issues or have suggestions, feel free to create an issue or submit a pull request.

## License

This project is open source and available under the MIT License.

