const esbuild = require("esbuild");
const fg = require("fast-glob");

esbuild.buildSync({
  entryPoints: fg.sync(
    ["./ant-design/components/**/*.{ts,tsx}", "./three.js/src/**/*.js"],
    {
      ignore: ["**/*.test.ts", "**/*.test.tsx"],
    }
  ),
  outdir: "./dist/esbuild",
  target: ["chrome63", "firefox67"],
});
