module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/base",
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        // ---- ESLint Rules -----
        // Possible Errors
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": process.env.nodeEnv === "production" ? "error" : "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": process.env.nodeEnv === "production" ? "error" : "warn",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-empty": "error",
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "curly": "error",
        "eqeqeq": "error",
        "no-empty-function": "error",
        "no-multi-spaces": "error",
        "no-self-compare": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "brace-style": "error",
        "camelcase": "error",
        "array-bracket-spacing": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { before: false, after: true }],
        "eol-last": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error"],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "mode": "strict" }],
        "keyword-spacing": ["error"],
        "multiline-ternary": ["error", "never"],
        "no-lonely-if": "error",
        "max-lines-per-function": ["error", { "max": 25, "skipComments": true }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "semi-style": ["error", "last"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "spaced-comment": ["error", "always"],
        // ES6
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "template-curly-spacing": "error",
        "object-curly-spacing": ["error", "always"],
        // WARNS
        "no-unreachable": "warn",
        "no-alert": "warn",
        "operator-assignment": ["warn", "always"],
        // ---- Vue Rules -----
        // Priority A: Essential (Error Prevention)
        "vue/no-async-in-computed-properties": "error",
        "vue/no-dupe-keys": "error",
        "vue/no-duplicate-attributes": "error",
        "vue/no-parsing-error": "error",
        "vue/no-reserved-keys": "error",
        "vue/no-shared-component-data": "error",
        "vue/no-side-effects-in-computed-properties": "error",
        "vue/no-template-key": "error",
        "vue/no-textarea-mustache": "error",
        "vue/no-unused-components": "error",
        "vue/no-unused-vars": "error",
        "vue/no-use-v-if-with-v-for": "error",
        "vue/require-component-is": "error",
        "vue/require-prop-type-constructor": "error",
        "vue/require-render-return": "error",
        "vue/require-v-for-key": "error",
        "vue/require-valid-default-prop": "error",
        "vue/return-in-computed-property": "error",
        "vue/use-v-on-exact": "error",
        "vue/valid-template-root": "error",
        "vue/valid-v-bind": "error",
        "vue/valid-v-cloak": "error",
        "vue/valid-v-else-if": "error",
        "vue/valid-v-else": "error",
        "vue/valid-v-for": "error",
        "vue/valid-v-html": "error",
        "vue/valid-v-if": "error",
        "vue/valid-v-model": "error",
        "vue/valid-v-on": "error",
        "vue/valid-v-once": "error",
        "vue/valid-v-pre": "error",
        "vue/valid-v-show": "error",
        "vue/valid-v-text": "error",
        // Priority B: Strongly Recommended (Improving Readability)
        "vue/attribute-hyphenation": "error",
        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never",
        }],
        "vue/html-closing-bracket-spacing": ["error", {
            startTag: "never",
            endTag: "never",
            selfClosingTag: "never",
        }],
        "vue/html-end-tags": "error",
        "vue/html-indent": ["error", 4, {
            attribute: 0,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        "vue/html-quotes": "error",
        "vue/html-self-closing": ["error", {
            html: {
                "void": "always",
                normal: "always",
                component: "always",
            },
            "svg": "always",
            "math": "always",
        }],
        "vue/multiline-html-element-content-newline": ["error", {
            ignoreWhenEmpty: true,
            ignores: [],
            allowEmptyLines: false,
        }],
        "vue/mustache-interpolation-spacing": "error",
        "vue/name-property-casing": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        "vue/no-template-shadow": "error",
        "vue/prop-name-casing": "error",
        "vue/require-default-prop": "error",
        "vue/require-prop-types": "error",
        "vue/singleline-html-element-content-newline": ["error", {
            ignoreWhenNoAttributes: false,
            ignoreWhenEmpty: true,
            ignores: [],
        }],
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
        // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
        "vue/attributes-order": "error",
        "vue/order-in-components": "error",
        "vue/this-in-template": "error",
        // Least Priority: Uncategorized
        "vue/array-bracket-spacing": "error",
        "vue/arrow-spacing": "error",
        "vue/block-spacing": "error",
        "vue/brace-style": "error",
        "vue/camelcase": "error",
        "vue/comma-dangle": ["error", "always-multiline"],
        "vue/component-definition-name-casing": "error",
        "vue/component-name-in-template-casing": "error",
        "vue/component-tags-order": ["error", {
            order: ["template", "script", "style"],
        }],
        "vue/dot-location": ["error", "property"],
        "vue/eqeqeq": "error",
        "vue/key-spacing": ["error", {
            mode: "strict",
        }],
        "vue/keyword-spacing": "error",
        "vue/match-component-file-name": ["error", {
            extensions: ["vue"],
            shouldMatchCase: true,
        }],
        "vue/max-len": ["error", {
            code: 150,
        }],
        "vue/no-boolean-default": ["error", "default-false"],
        "vue/no-deprecated-scope-attribute": "error",
        "vue/no-empty-pattern": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-reserved-component-names": "error",
        "vue/no-restricted-syntax": "error",
        "vue/no-static-inline-styles": "error",
        "vue/object-curly-spacing": ["error", "always"],
        "vue/padding-line-between-blocks": "error",
        "vue/require-direct-export": "error",
        "vue/require-name-property": "error",
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": "error",
        "vue/v-on-function-call": "error",
        "vue/v-slot-style": "error",
        "vue/valid-v-bind-sync": "error",
        "vue/valid-v-slot": "error",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                mocha: true,
            },
        },
    ],
};