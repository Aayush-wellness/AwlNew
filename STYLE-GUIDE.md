# Style Guide - How to Use Custom Colors

## Available Custom Classes

### Text Colors
```tsx
<h1 className="heading">Main Heading (emerald-900)</h1>
<h2 className="title">Section Title (gray-800)</h2>
<p className="subtitle">Subtitle text (gray-600)</p>
<p className="body-text">Body paragraph (gray-500)</p>
```

### Navigation Links
```tsx
<Link href="#" className="navlink">Menu Item</Link>
// Automatically has hover effect to emerald-700
```

### Buttons
```tsx
// Primary button (dark background, white text)
<button className="btn-primary">Click Me</button>

// Secondary button (transparent with border)
<button className="btn-secondary">Learn More</button>
```

## Using CSS Variables

### In JSX with inline styles
```tsx
<h1 style={{ color: 'var(--heading)' }}>Heading</h1>
<p style={{ color: 'var(--subtitle)' }}>Subtitle</p>
<button style={{ backgroundColor: 'var(--btn-primary-bg)' }}>Button</button>
```

### In your own CSS files
```css
.my-custom-class {
  color: var(--heading);
  background: var(--primary);
}
```

## Combining with Tailwind

You can mix custom classes with Tailwind utilities:

```tsx
// Custom color + Tailwind sizing/spacing
<h1 className="heading text-5xl font-bold mb-6">
  Large Heading
</h1>

// Custom button + Tailwind layout
<button className="btn-primary flex items-center gap-2">
  <Icon />
  <span>Button Text</span>
</button>

// Custom text + Tailwind responsive
<p className="subtitle text-lg md:text-xl">
  Responsive subtitle
</p>
```

## Available Color Variables

### Brand Colors
- `--primary` → #047857 (emerald-700)
- `--primary-dark` → #065f46 (emerald-800)
- `--secondary` → #1f2937 (gray-800)

### Text Colors
- `--nav-text` → #1E1E1E (dark gray)
- `--heading` → #064e3b (emerald-900)
- `--title` → #1f2937 (gray-800)
- `--subtitle` → #4b5563 (gray-600)
- `--body-text` → #6b7280 (gray-500)

### Button Colors
- `--btn-primary-bg` → #1f2937
- `--btn-primary-hover` → #111827
- `--btn-primary-text` → #ffffff
- `--btn-secondary-border` → #1f2937
- `--btn-secondary-text` → #1f2937

## Real Examples from Your Project

### Navbar (already using custom classes)
```tsx
<Link href="#about" className="navlink">About</Link>
```

### Hero Section Example
```tsx
<h1 className="heading text-6xl font-bold">
  THE NEW ERA OF WELLNESS
</h1>

<p className="subtitle text-xl max-w-4xl mx-auto">
  Delivering holistic wellness solutions...
</p>

<button className="btn-primary">Explore Platforms</button>
<button className="btn-secondary">Partner with us</button>
```

## Changing Colors

To change any color, edit `app/globals.css`:

```css
:root {
  --heading: #064e3b;  /* Change this hex value */
  --btn-primary-bg: #1f2937;  /* Change this hex value */
}
```

All components using these variables will update automatically!
