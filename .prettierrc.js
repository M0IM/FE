module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@utils/(.*)$",
    "^@apis/(.*)$",
    "^@hooks/(.*)$",
    "^@data/(.*)$",
    "^@uis/(.*)$",
    "^@components/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 80,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: true,
  rangeStart: 0,
};
