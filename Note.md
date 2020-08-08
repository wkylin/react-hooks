
While React memo is used to wrap React components to prevent re-renderings,
useMemo is used to memoize values.

every time (no argument)
only on mount and unmount ([] argument)
only when a certain variable changes (e.g. [count] argument)


eslint --init
eslint src/**/*.js
eslint --fix src/**/*.js

"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-commit": "npm run lint:fix",
    "pre-push": "npm run lint",
    "pre-push": "npm run test:all"
  }
},

  set-ExecutionPolicy RemoteSigned