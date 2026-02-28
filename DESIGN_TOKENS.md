# FDGC Design Tokens

## Tailwind Config Extension

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        fdgc: {
          bg: {
            primary: '#0A0F14',
            secondary: '#0E1724',
          },
          gold: {
            accent: '#C6A75E',
            primary: '#D4AF37',
            light: '#E6C56A',
          },
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(198, 167, 94, 0.4)',
        'gold-soft': '0 0 15px rgba(198, 167, 94, 0.2)',
      },
    },
  },
}
```

## CSS Variables (Alternative)

```css
:root {
  --fdgc-bg-primary: #0A0F14;
  --fdgc-bg-secondary: #0E1724;
  --fdgc-gold-accent: #C6A75E;
  --fdgc-gold-primary: #D4AF37;
  --fdgc-gold-light: #E6C56A;
}
```
