# FDGC Website — Text Change Design Break Audit

## Problem
Chhote text changes (jaise color, shadow) karne par puri site ka design kharab ho jata hai.

---

## Root Cause Analysis

### 1. **Tailwind CSS Purge / Content Scan**
- Tailwind sirf **content paths** mein jo classes milti hain, wahi generate karta hai
- Agar koi class remove ho jaye ya typo ho, woh CSS generate nahi hoti
- **Risk:** Replace karte waqt galti se koi important class ka hissa cut ho sakta hai (e.g. `text-white` se `text-` reh jaye)

### 2. **CSS Cascade Order**
- `globals.css` order: `@tailwind base` → `@tailwind components` → `@tailwind utilities` → custom rules
- Naye custom classes (jaise `text-shadow-subtle`) agar utilities ke baad add hon, woh Tailwind utilities par override kar sakte hain
- **Risk:** Body/typography inheritance ya specificity conflict

### 3. **Tailwind Base / Preflight Reset**
- `@tailwind base` Preflight add karta hai — yeh headings, paragraphs, lists ka default style reset karta hai
- Agar kisi component mein classes incomplete hon, Preflight ka reset zyada visible ho sakta hai

### 4. **Browser / Build Cache**
- Dev: `.next` cache + browser cache mismatch
- Build ke baad purana CSS cache mein, naya HTML load — layout/colors galat dikh sakte hain
- **Common:** Hard refresh (Cmd+Shift+R) nahi kiya to purani CSS dikhati rahegi

### 5. **Class Replacement Errors**
- Search-replace mein galti:
  - `text-zinc-400` ko `text-zinc-300` karte waqt `text-zinc-40` ya `text-zinc-4` reh jana
  - Kisi class ka partial remove (e.g. `leading-relaxed` se sirf `leading-` remove ho jana)

### 6. **Layout Inheritance**
- Body par `font-sans antialiased` — yeh sab children ko inherit hota hai
- Kisi section ki `font-serif` agar kisi reason se hata de to puri typography change ho jati hai

---

## Recommendations (Design Break Se Bachne Ke Liye)

### A. Isolated Text Utility Classes
Text visibility ke liye **globals.css** mein utility add karo, jo existing classes ko override na kare:

```css
/* Use sparingly — only where needed */
@layer utilities {
  .text-visible-on-image {
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }
}
```
`@layer utilities` use karne se Tailwind ke saath conflict nahi hoga.

### B. Incremental Changes
- Ek time par ek hi type ka change: ya to color, ya shadow, ya overlay
- Har change ke baad build + verify

### C. Safelist for Critical Classes
Agar koi class dynamic ho, `tailwind.config.ts` mein safelist add karo:
```js
safelist: ['text-shadow-subtle', 'text-shadow-heading']
```

### D. Cache Clear Habit
- Har significant change ke baad: `rm -rf .next && npm run build`
- Browser: Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### E. Git Checkpoints
- Har working state par commit — revert easy ho
- `git diff` se dekh sakte ho exactly kya change hua

---

## Quick Checklist — Text Change Se Pehle

1. [ ] Sirf text color/shadow change kar rahe ho — layout/width/height mat chhedo
2. [ ] Replace mein poora class string dhoondo — partial match se bacho
3. [ ] Build run karo: `npm run build`
4. [ ] Hard refresh karo browser mein
5. [ ] Agar design break ho — `git checkout .` se revert (agar git use kar rahe ho)

---

## Conclusion

Design break ka sabse likely reason:
- **Browser/Next cache** (purani CSS + naya markup)
- **Replace typo** (class ka hissa galti se remove)
- **Cascade conflict** (custom CSS Tailwind par override)

**Best practice:** Chhote changes, test, phir next change. Cache clear karna na bhoolo.
