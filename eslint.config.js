export default [
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly", // allows `document` global
        window: "readonly",   // allows `window` global
        setTimeout: "readonly", // allows `setTimeout` global
        alert: "readonly"      // allows `alert` global
      }
    },
    rules: {
      "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
      "no-undef": "error",
      "eqeqeq": "warn",
      "semi": ["error", "always"]
    }
  }
];