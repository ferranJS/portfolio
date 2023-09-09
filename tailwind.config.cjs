/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fill: {
        base: "var(--color-base-text)",
      },
      backgroundColor: {
        base: "var(--color-base-bg)",
        translucent: "var(--color-translucent-bg)",
        "main-span": "var(--color-main-span)",
      },
      textColor: {
        "color-base": "var(--color-base-text)",
      },
      borderColor: {
        "color-base": "var(--color-base-border)",
      },
      fontFamily: {
        heming: ["Heming Variable", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
