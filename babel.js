const babel = require("@babel/core");
const fg = require("fast-glob");
const fs = require("fs-extra");
const path = require("path");

fg.sync(["./ant-design/components/**/*.{ts,tsx}", "./three.js/src/**/*.js"], {
  ignore: ["**/*.test.ts", "**/*.test.tsx"],
}).forEach((filepath) => {
  const outputPath = path.join(
    "./dist/babel/",
    filepath.replace(".tsx", ".js").replace(".ts", ".js")
  );
  const presets = ["@babel/preset-env"];
  if (filepath.endsWith(".ts") || filepath.endsWith(".tsx")) {
    presets.push("@babel/preset-typescript");
  }
  if (filepath.endsWith(".jsx") || filepath.endsWith(".tsx")) {
    presets.push("@babel/preset-react");
  }
  babel.transformFile(
    filepath,
    {
      presets,
      plugins: [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
      ],
      targets: {
        chrome: 63,
        firefox: 67,
      },
    },
    (error, output) => {
      if (error) console.error(error);
      fs.outputFile(outputPath, output.code);
    }
  );
});
