/**
 * Based on: React Starter Kit (https://www.reactstarterkit.com/)
 */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: "babel-eslint",

  extends: ["airbnb", "prettier", "prettier/react"],

  plugins: ["react", "jsx-a11y", "import", "prettier"],

  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },

  rules: {
    "prettier/prettier": "error",
    // `js` and `jsx` are common extensions
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never"
      }
    ],

    "no-unused-vars": "off",

    "react/react-in-jsx-scope": "off",

    "react/jsx-filename-extension": "off",

    // prop-types typing
    "react/prop-types": "off",

    // Ensures an imported module can be resolved to a module on the local filesystem.
    // As defined by standard Node require.resolve behavior.
    "import/no-unresolved": "off",

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    "import/no-extraneous-dependencies": "off",

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],

    // Allow js files to use jsx syntax, too
    "react/jsx-filename-extension": "off"
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/components"]
      }
    }
  }
};
