
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

  <!-- <li style={Object.assign({}, fooStyles, barStyles)}> -->

  window.getComputedStyle(document.documentElement).getPropertyValue("--color-surface");
  document.documentElement.style.setProperty("--color-surface", "black");

function isObjectEmpty(value) {
  return Object.prototype.toString.call(value) === "[object Object]" && JSON.stringify(value) === "{}"
}

function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
// TypeError: Cannot covert undefined or null ot object
goodEmptyCheck(undefined)
goodEmptyCheck(null)

const updateField = e => {
  setValues({
    ...form,
    [e.target.name]: e.target.value
  });
};
