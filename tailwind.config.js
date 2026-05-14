/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F5F0E8",
        cedar: "#9A6A43",
        walnut: "#2D2925",
        fur: "#A7A7A0",
        moss: "#66715A",
        brass: "#B59A5B",
        "fine-border": "rgba(154, 106, 67, 0.28)",
      },
      fontFamily: {
        serif: [
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          '"YuMincho"',
          '"Noto Serif JP"',
          "serif",
        ],
        sans: [
          '"Hiragino Sans"',
          '"Yu Gothic"',
          '"YuGothic"',
          '"Noto Sans JP"',
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(45, 41, 37, 0.08)",
      },
      transitionTimingFunction: {
        cafe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "page-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 780ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "page-fade": "page-fade 260ms ease-out both",
      },
    },
  },
  plugins: [],
};
