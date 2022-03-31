const swc = require("@swc/core");
const fg = require("fast-glob");
const fs = require("fs-extra");
const path = require("path");

fg.sync([
  "./ant-design/**/*.test.{ts,tsx,js,jsx}",
  "./ant-design/**/*.{css,less,md,snap}",
  "./ant-design/**/__test__/**/*",
  "./ant-design/**/__tests__/**/*",
]).forEach((filepath) => {
  fs.rm(filepath);
});
