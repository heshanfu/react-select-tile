const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es2015",
  sourceMaps: true,
  output: "dist/$name.js"
});

const fuse2 = FuseBox.init({
  homeDir: "src",
  target: "browser@es2015",
  sourceMaps: true,
  output: "dist/$name.js",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true
    })
  ]
});

fuse.bundle("react-select-tile").instructions(" > [index.tsx]");
fuse2.bundle("react-select-tile.min").instructions(" > [index.tsx]");
fuse.run();
fuse2.run();
