# Project Overview

This is a Next.js project for a painting company website, "Galilee Peinture". It's a modern, internationalized web application built with TypeScript and styled with Tailwind CSS. The project uses the Next.js App Router for routing and `next-intl` for internationalization, supporting both English and French languages.

## Building and Running

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Development

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

To build the application for production:

```bash
pnpm build
```

### Running the Production Server

To start the production server:

```bash
pnpm start
```

### Linting

To run the linter:

```bash
pnpm lint
```

## Development Conventions

### Project Structure

The project follows the standard Next.js App Router structure:

- `app/[locale]/`: Contains the pages for the application, with internationalization support.
- `components/`: Contains reusable React components.
- `data/`: Contains project data, like project descriptions.
- `i18n/`: Contains the internationalization configuration.
- `lib/`: Contains utility functions.
- `messages/`: Contains the translation files (`en.json`, `fr.json`).
- `public/`: Contains static assets like images and SVGs.

### Component-Based Architecture

The application is built using a component-based architecture. Components are located in the `components/` directory. For example, `Header`, `Footer`, `HeroCarousel`, etc.

### Internationalization (i18n)

The project uses `next-intl` for internationalization.
- Language files are in `messages/`.
- The `i18n/` directory contains the configuration for routing and navigation.
- The `[locale]` dynamic segment in the `app/` directory handles the routing for different languages.

### Styling

The project uses Tailwind CSS for styling. Utility classes are used directly in the components. The `globals.css` file contains base styles.

### Additional Coding Preferences

- Always look for the [design system file](design_system.md) before creating a page or component to match the global system design
- Always lint to check if there is an error, and if it is the case, try to fix it