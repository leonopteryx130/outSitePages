import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    ignores: [
      ".webpack/",
      "webpack/",
      "node_modules/"
    ],
    rules: {
      // 在这里添加您自定义的规则
      "no-unused-vars": "error",
    },
  },
  pluginReact.configs.flat.recommended,
];