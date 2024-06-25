import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  {
    "env": {
      "node": true,
      "es2021": true
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "rules": {
      // Add specific rules as needed
    }
  },
  pluginJs.configs.recommended,
];