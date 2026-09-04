---
version: alpha
name: Hyper-Ox Signal Lab
description: A dark technical brand system for a one-stop AI security and execution layer.
colors:
  ink: "oklch(14% 0.018 255)"
  panel: "oklch(19% 0.025 255)"
  panel-high: "oklch(24% 0.035 255)"
  text: "oklch(94% 0.012 255)"
  muted: "oklch(74% 0.018 255)"
  line: "oklch(34% 0.035 255)"
  violet: "oklch(62% 0.24 300)"
  cyan: "oklch(78% 0.16 205)"
  signal: "oklch(88% 0.22 130)"
  white: "oklch(99% 0 0)"
typography:
  display:
    fontFamily: Geist
    fontSize: 96px
    fontWeight: 760
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: 720
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: 0px
  sm: 6px
  md: 10px
spacing:
  xs: 6px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  panel:
    backgroundColor: "{colors.panel}"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
---

## Overview
Hyper-Ox Signal Lab is a dark, proof-first brand system inspired by anti-template design surfaces and persistent DESIGN.md token practice. It should look engineered rather than decorative: interface fragments, diagrams, rail-like galleries, and visible proof records carry the brand.

## Colors
The system uses a committed dark surface with three functional accents. Violet signals product identity, cyan marks system/data flow, and signal green marks verified action. Neutrals stay cool and high contrast, avoiding generic SaaS beige or washed-out gray.

## Typography
Geist provides a precise technical voice without leaning on monospace shorthand. Display text is compressed, confident, and capped at 96px. Body copy stays readable and mostly sentence case; uppercase is reserved for navigation, short labels, and controls.

## Layout
Pages use wide rails, asymmetrical split sections, and dense proof panels. Cards are used sparingly for product surfaces and article entries; diagrams and command strips break the grid so the site does not become a repeated card wall.

## Elevation & Depth
Depth comes from tonal layers, borders, inset grid textures, and accent glows. Avoid glassmorphism and generic drop-shadow stacks.

## Shapes
Shapes are mostly sharp with small 6-10px radii where shadcn primitives need touch-friendly containment. Product diagrams use squared technical panels.

## Components
Buttons are high-contrast signal blocks. Product panels include an icon, a precise label, one strong outcome, and a path into architecture. Diagrams are semantic HTML so they are fast, accessible, and indexable.

## Do's and Don'ts
- Do show concrete AI-security systems in every major section.
- Do keep body copy readable against dark panels.
- Do use `DESIGN.md` as the source of truth for future visual changes.
- Don't add vague AI imagery, generic gradient blobs, or repeated eyebrow-section scaffolds.
- Don't use more features than the static marketing site needs.
