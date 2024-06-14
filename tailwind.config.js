module.exports = {
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        // Hide scrollbar for Chrome, Safari and Opera
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        // Hide scrollbar for IE, Edge and Firefox
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".text-10": {
          fontSize: "10px",
          lineHeight: "14px",
        },
        ".text-12": {
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-14": {
          fontSize: "14px",
          lineHeight: "20px",
        },
        ".text-16": {
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".text-18": {
          fontSize: "18px",
          lineHeight: "22px",
        },
        ".text-20": {
          fontSize: "20px",
          lineHeight: "24px",
        },
        ".text-24": {
          fontSize: "24px",
          lineHeight: "30px",
        },
        ".text-26": {
          fontSize: "26px",
          lineHeight: "32px",
        },
        ".text-30": {
          fontSize: "30px",
          lineHeight: "38px",
        },
        ".text-36": {
          fontSize: "36px",
          lineHeight: "44px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
