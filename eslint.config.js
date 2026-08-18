import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Personal-site scale: warn, don't hard-fail on unused vars during iteration
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);
