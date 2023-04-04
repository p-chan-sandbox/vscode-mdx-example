# vscode-mdx-example

A example of [vscode-mdx](https://github.com/mdx-js/mdx-analyzer/tree/main/packages/vscode-mdx)

- Open `src/mdx/index.mdx`, Confirm disabled type check of TypeScript
  - Ex) Add undefined props does not show an error
- Set `mdx.experimentalLanguageServer` in `.vscode/settings.json` to `true`
- Add `**/*.mdx` to `include` in `tsconifg.json`
- Set `checkJs` in `tsconfig.json` to `true`
  - Hint: https://github.com/orgs/mdx-js/discussions/2269#discussioncomment-5301808
- <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> -> Developer: Reload Window
- Open `src/mdx/index.mdx`, Confirm enabled type check of TypeScript
  - Ex) Add undefined props show an error
