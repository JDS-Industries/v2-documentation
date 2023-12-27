module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        es6: true,
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'frontmatter'
  ],
  rules: {
    indent: [
      error,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [
      error,
      single,
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    
  }
}
