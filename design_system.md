# Galilée Peinture - Design System

> "Editorial Art Gallery": minimalist, refined, and immersive.

## Core Philosophy

The interface mimics a high-end art gallery or luxury fashion editorial. The user is a visitor; the website is the exhibition.

- **Less is More**: Every element must have a purpose. Whitespace is an active design element.
- **Movement is Key**: Interactions should feel fluid and weightless. Animations are slow, smooth, and staggering.
- **Content First**: Typography and imagery take center stage. UI elements (buttons, navigation) are secondary and unobtrusive.

## Typography

### Primary Headings & Branding

- **Font**: `Playfair Display`
- **Usage**: Hero titles, Section headers, Branding (Logo), "Big Number" counters.
- **Style**: Often thin/light weights, uppercase with wide tracking (`tracking-[0.1em]` to `tracking-[0.3em]`), or italicized for emphasis.

### Body & UI

- **Font**: `Inter` (or system sans-serif)
- **Usage**: Paragraph text, Navigation links, Buttons, Captions.
- **Style**: Clean, legible, neutral.

## Color Palette

### Monochrome Base

- **White (#FFFFFF)**: Primary background.
- **Black (#000000)**: Primary text, high contrast elements.
- **Stone/Greys (Tailwind `stone-200` to `stone-400`)**: Subtle borders, secondary text, inactive states.

### Accent

- **Amber (Tailwind `amber-700`)**: Used sparingly for:
  - Active states (navigation links, language toggle).
  - Hover text highlights.
  - Small detail lines or active indicators.

## Components & Patterns

### Navigation (Header)

- **State**: Transparent on Hero, Solid White on scroll.
- **Active Links**:
  - _Transparent_: White text + White underline.
  - _Scrolled_: Amber text, NO underline.
- **Hover**: Subtle color shift.

### Hero Section

- **Style**: "Editorial Cover". Full-screen immersive images.
- **Effect**: Ken Burns (slow scale) on images.
- **Elements**: Minimal slide indicators (bottom left), staggering text reveals.

### Projects / Lists

- **Style**: "Accordion Reveal".
- **Interaction**: Hovering a list item reveals a large preview image.
- **Structure**: Clean lines, large typography, minimalist numbering (01, 02...).

### Intro / About

- **Layout**: Asymmetrical. Large typographic statements vs. clean imagery.
- **Tone**: Narrative and inviting.

## Animation Guidelines

- **Duration**: Generally slow and relaxed (>0.8s).
- **Easing**: `ease-out` or custom spring damping.
- **Scroll**: Elements fade in and slide up (`y: 20` to `y: 0`) as they enter the viewport.
