import { tailwindcssVarsInjector } from "tailwindcss-vars-injector";

/* eslint-disable */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssVarsInjector({ activeVars: ["colors", "blur", "boxShadow"] }),
  ],
};
