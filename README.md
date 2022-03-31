# benchmark-js-compilers

Compare performance of babel, esbuild and swc as javascript compilers

## Sample Code

antd source (TypeScript) + three.js source (JavaScript)

## Output Standard

Transform the code to ES6 (Firefox 67+, Chrome 63+). (Sadly, esbuild doesn't fully support ES5 output.)

## Test Devices

### ThinkPad T480

System information:

- CPU: i7-8550U
- RAM: 32 GB 2667 MHz DDR4
- Node: 16.14.1
- OS: openSUSE Tumbleweed Linux 5.16.14

Benchmark results:

1. esbuild: 0.464s
2. swc: 0.549s
3. babel: 10.133s

### MacBook Pro 16 (2019)

System information:

- CPU: i7-9750H
- RAM: 16 GB 2667 MHz DDR4
- Node: 16.14.0
- OS: macOS Monterey 12.2.1

Benchmark results:

1. esbuild: 4.052s, 1.9MB
2. swc: 6.892s, 1.9MB
3. terser: 13.834s, 1.8MB
4. no-minify: 3.556s, 4.7MB

## Summary

Only based on my test, may be not true for your real-world projects.
