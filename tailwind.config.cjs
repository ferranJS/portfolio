/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      backgroundColor: {
        base: "var(--color-base-bg)",
        blurred: "var(--color-blurred-bg)",
      },
      textColor: {
        "color-base": "var(--color-base-text)",
      },
      fontFamily: {
        heming: ["Heming Variable", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
