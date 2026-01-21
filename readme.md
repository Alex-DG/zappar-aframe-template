# Zappar A-Frame Template 🚀

## Description

- Minimal reusable template project: Zappar + A-Frame made with viteJS⚡
- [Zappar Universal AR SDK + Three.js Template](https://github.com/Alex-DG/zappar-aframe-template)

<p align="center">
  <img width="300" alt="Demo" src="https://github.com/user-attachments/assets/b2b666f6-e5cb-4010-ad37-f41f63ab6b28" />
  <img width="300" alt="QR Code" src="https://github.com/user-attachments/assets/acc96d0c-d496-4470-b92d-8a56d78fd439" />
</p>

## Setup

Run the following commands:

```bash
# Install dependencies (only the first time)
yarn

# Run the local server
yarn dev

# Build for production in the dist/ directory
yarn build
```


## 🏗 Project Structure

The project is organized into a modular structure:

```
public/
├── models/            # 3D assets (GLB/GLTF)
src/
├── components/        # Custom A-Frame components
│   └── tap-place.js   # Logic for placing/lifting objects
├── main.js            # Entry point, registers components
└── style.css          # Global styles
index.html             # Main HTML file with A-Frame scene
```

## 🧠 Architecture Overview

### 1. The Entry Point (`src/main.js`)
This script acts as the bridge between standard JavaScript and A-Frame. It:
1.  Imports global styles.
2.  Imports custom components (like `tap-place`).
3.  Registers these components with `AFRAME.registerComponent`, making them available to use in HTML.

### 2. Custom Components (`src/components/`)
Logic is encapsulated in reusable components.
*   **`tap-place.js`**: Handles the Instant World Tracking interactions. It toggles a "placement mode" state when the user taps the UI button, updating the `zappar-instant` attribute and the model's animation state accordingly.

### 3. The Scene (`index.html`)
The standard A-Frame scene setup:
*   **`zappar-camera`**: The camera feed for AR.
*   **`zappar-instant`**: The anchor group that tracks a point in the real world.
*   **`#zappar-placement-ui`**: A simple HTML button that interacts with the `tap-place` component.
