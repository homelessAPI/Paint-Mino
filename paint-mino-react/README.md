# Paint Mino 🎨

**A digital painting application built to explore better brushes, natural drawing experiences, and creative freedom.**

Paint Mino is a personal digital painting project built with React and JavaScript. The goal is to develop a drawing environment with expressive, customizable brushes and an intuitive canvas workflow, while learning the engineering behind digital art software.

The project is currently under active development.

## ✨ Features

### Currently implemented
- **Canvas creation** — create canvases with custom names and dimensions.
- **Drawing tools** — draw directly on an HTML canvas.
- **Brush and eraser** — switch between drawing and erasing.
- **Saved paintings** — save drawings locally and reopen them later.
- **Automatic saving** — preserve canvas images in browser storage after drawing.

### In development
- **Advanced brush engine** — develop distinct ink, pencil, round, and flat brushes.
- **Improved stroke quality** — smoother lines and more natural brush behavior.
- **Brush customization** — configurable size, opacity, and other brush properties.
- **Canvas navigation** — zoom, pan, and rotate the workspace.
- **Undo and redo** — build a reliable history system for editing strokes.

These features are planned or in progress and may change as development continues.

## 🛠️ Built With

- **React** — user interface and component structure.
- **JavaScript** — application logic and drawing behavior.
- **HTML Canvas API** — rendering strokes and manipulating image pixels.
- **CSS** — layout and visual styling.
- **Vite** — development server and build tooling.
- **Browser localStorage** — persistence for saved paintings.

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/homelessAPI/Paint-Mino.git
```

Navigate to the React application directory:

```bash
cd Paint-Mino/paint-mino-react
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal by Vite.

## 🖌️ Project Goals

Paint Mino is being developed around a few core goals:

- **Brush identity:** each tool should behave differently rather than simply changing color or line width.
- **Drawing quality:** strokes should feel smooth, responsive, and predictable.
- **Creative control:** artists should eventually be able to customize their tools to suit their workflows.
- **Reliable persistence:** drawings should remain available when the application is reopened.
- **Learning through implementation:** build a deeper understanding of graphics programming, input handling, and application architecture.

The long-term ambition is to create a painting application that prioritizes expressive brush behavior and a comfortable illustration workflow.

## 🗺️ Roadmap

- [x] Create and open canvases
- [x] Draw and erase
- [x] Save and reopen paintings
- [ ] Improve brush rendering and stroke smoothing
- [ ] Implement distinct brush engines
- [ ] Add undo and redo
- [ ] Add zoom, pan, and rotation
- [ ] Improve workspace layout and usability
- [ ] Explore stylus pressure and tilt support
- [ ] Investigate more advanced paint and pigment simulation

## 📚 What I'm Learning

This project is also an opportunity to develop practical skills in:

- React components, state, and references
- JavaScript module design
- Canvas rendering and drawing algorithms
- Pointer input and gesture handling
- Image persistence and application architecture
- Performance considerations for graphics applications

## ⚠️ Current Limitations

Paint Mino is an early-stage project, not yet a replacement for established painting applications. Brush behavior, editing workflows, and workspace controls are still evolving.

Saved paintings are currently stored in the browser's local storage, so they are not automatically synchronized between browsers or devices. Exporting important artwork separately is recommended.

## 📄 License

No license has been specified yet. Until one is added to the repository, the project should not be assumed to grant permission for reuse, redistribution, or modification.
