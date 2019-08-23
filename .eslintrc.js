module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
    "react-hooks",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".jsx", ".js"] }
    ],
    "import/prefer-default-export": "off",

    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",

    "react/jsx-props-no-spreading": "off",

    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-console": ["error", { allow: ["tron"] }],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "camelcase": "off",
    // allow use underscore at begning of variables
    "no-underscore-dangle": "off"
    //"no-underscore-dangle": ["error", { "allow": ["_id"] }]

    // "import/no-unresolved": "off",
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {
        "rootPathPrefix": "~",
        "rootPathSuffix": "src"
      }
    }
  }
};
