const swc = require("@swc/core");
const fg = require("fast-glob");
const fs = require("fs-extra");
const path = require("path");

fg.sync(["./ant-design/components/**/*.{ts,tsx}", "./three.js/src/**/*.js"], {
  ignore: ["**/*.test.ts", "**/*.test.tsx"],
}).forEach((filepath) => {
  const outputPath = path.join(
    "./dist/swc/",
    filepath.replace(".tsx", ".js").replace(".ts", ".js")
  );
  swc
    .transformFile(filepath, {
      jsc: {
        parser: {
          syntax: filepath.endsWith(".js") ? "ecmascript" : "typescript",
          tsx: filepath.endsWith(".tsx"),
          decorators: true,
        },
        target: "es2015",
      },
      env: {
        targets: {
          chrome: 63,
          firefox: 67,
        },
      },
      outputPath,
    })
    .then((output) => {
      fs.outputFile(outputPath, output.code);
    });
});
