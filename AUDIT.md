# Accessibility & Performance Audit

## Project

**3D Product Showcase**

**Live Preview:** https://3dproduct-showcase.netlify.app

**Audit Date:** September 14, 2026

---

## 1. Lighthouse Audit

The project was tested using Google Lighthouse on the deployed Netlify preview.

### Baseline Results

| Category       | Before Optimization |
| -------------- | ------------------: |
| Performance    |                  59 |
| Accessibility  |                  95 |
| Best Practices |                 100 |

### Final Results

| Category       | After Optimization |
| -------------- | -----------------: |
| Performance    |             **66** |
| Accessibility  |            **100** |
| Best Practices |            **100** |

### Improvement

* Performance improved from **59 → 66**
* Accessibility improved from **95 → 100**
* Best Practices remained at **100**

---

## 2. Accessibility Improvements

The following accessibility improvements were implemented:

* Added a semantic `<main>` landmark.
* Added a semantic `<header>` element.
* Added proper heading structure using H1 and H2 headings.
* Added accessible labels for product color buttons.
* Added `aria-pressed` to indicate the selected color.
* Added a polite live region for the selected color.
* Added `aria-hidden="true"` to decorative icons and interaction hints.
* Added accessible names to interactive color controls.
* Ensured the color controls are keyboard reachable.
* Verified keyboard navigation using the Tab key.
* Verified that color buttons work with keyboard input.
* Improved accessibility of the product information section.

---

## 3. WAVE Accessibility Test

The deployed website was tested using the WAVE Web Accessibility Evaluation Tool.

### WAVE Results

| Check               |    Result |
| ------------------- | --------: |
| Errors              |     **0** |
| Contrast Errors     |     **0** |
| Alerts              |     **0** |
| Features            |         1 |
| Structural Elements |         6 |
| ARIA                |        22 |
| AIM Score           | **10/10** |

### WAVE Conclusion

WAVE detected **no accessibility errors, contrast errors, or alerts**.

The page also contains appropriate structural elements including:

* Heading level 1
* Heading level 2
* Header landmark
* Main content landmark
* Language information
* ARIA labels and live region

---

## 4. Keyboard Accessibility Test

A manual keyboard-only test was performed.

### Test Steps

1. Opened the deployed website.
2. Used the `Tab` key without using the mouse.
3. Navigated through the interactive color controls.
4. Checked that the controls received keyboard focus.
5. Used `Enter` and keyboard input on the color buttons.
6. Verified that the selected product color changed correctly.

### Result

**PASS ✅**

The primary interactive controls are keyboard reachable and functional.

---

## 5. Performance Improvements

Several performance optimizations were implemented.

### JavaScript Loading

The 3D scene was moved into a separate lazy-loaded component:

`src/components/ProductScene.jsx`

This reduced the initial JavaScript bundle significantly.

### Before

The main JavaScript bundle was approximately:

**1,106 KB**

### After

The initial JavaScript bundle was approximately:

**195 KB**

The larger 3D scene is now loaded as a separate chunk.

### Rendering Optimizations

The 3D scene was also optimized using:

* `frameloop="demand"`
* Reduced device pixel ratio using `dpr={[1, 1.25]}`
* Reduced shadow map size from 2048 to 1024
* Lazy loading of the 3D scene

These changes reduce unnecessary rendering and initial loading work.

---

## 6. Final Lighthouse Performance Details

Final Lighthouse results:

* Performance: **66**
* Accessibility: **100**
* Best Practices: **100**
* First Contentful Paint: **2.1 s**
* Largest Contentful Paint: **2.1 s**
* Total Blocking Time: **1,930 ms**
* Cumulative Layout Shift: **0.035**
* Speed Index: **4.8 s**

The remaining performance cost is mainly related to the JavaScript required for the interactive 3D experience.

---

## 7. AI-Specific Accessibility

The FE-10 requirements mention streamed AI output and an accessible stop button.

This project is a **3D Product Showcase** and does not contain an AI chat interface or streamed AI output.

Therefore, AI-specific chat accessibility requirements are **Not Applicable (N/A)** to this project.

---

## 8. Images and Layout

The project does not use content images that require alternative text.

The 3D product is rendered using WebGL/React Three Fiber rather than a traditional image.

Layout stability was also checked through Lighthouse.

Final CLS:

**0.035**

---

## 9. Final Audit Summary

The 3D Product Showcase successfully passed the main accessibility checks.

### Final Status

* Lighthouse Accessibility: **100/100 ✅**
* Lighthouse Best Practices: **100/100 ✅**
* WAVE Errors: **0 ✅**
* WAVE Contrast Errors: **0 ✅**
* WAVE Alerts: **0 ✅**
* WAVE AIM Score: **10/10 ✅**
* Keyboard Navigation: **PASS ✅**
* Performance: **66/100**

The project is accessible through keyboard navigation, uses semantic HTML and ARIA where appropriate, and has been optimized to reduce the initial JavaScript loading cost of the 3D experience.

---

## 10. Screenshots

### Lighthouse Baseline

*Add the baseline Lighthouse screenshot here.*

### Lighthouse Final

*Add the final Lighthouse screenshot showing 66 Performance, 100 Accessibility, and 100 Best Practices here.*

### WAVE Results

*Add the WAVE screenshot showing 0 Errors, 0 Contrast Errors, 0 Alerts, and 10/10 AIM Score here.*

### Keyboard Test

*Add a screenshot showing keyboard focus on an interactive color button if required.*
