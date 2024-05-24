import js from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import pluginVue from "eslint-plugin-vue";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier,
]).prepend(js.configs.recommended, ...pluginVue.configs["flat/recommended"], [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: typescriptEslintParser,
      sourceType: "module",
    },
    rules: {
      "vue/no-multiple-template-root": "off",
      "tailwindcss/no-custom-classname": "off",
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index"],
        },
      ],
    },
  },
]);
