
yarn global add license-checker
yarn global add improved-yarn-audit
yarn global add depcheck


// https://medium.com/swlh/24-modern-es6-code-snippets-to-solve-practical-js-problems-3609f301859e

// https://dev.to/bornfightcompany/top-10-react-hook-libraries-4065?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email
// https://rasha08.medium.com/
// git show branch:file
// git cherry-pick <commit_id>

// https://chrisfrew.in/blog/persist-and-remember-page-scroll-position-with-react-hooks/

"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,ts,tsx,md}": [
        "eslint --quiet --fix"
    ],
    "*.{json,md,html}": [
        "prettier --write"
    ]
}


// npm depcheck



https://github.com/zenghongtu/react-use-chinese
https://github.com/ava/use-http

https://ysfaran.github.io/blog/post/0002-use-state-with-promise/

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

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useRoutes,
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';

const rootElement = document.getElementById("root");
// 进入 Concurrent 模式
ReactDOM.createRoot(rootElement).render(<App />);

import {
  useDeferredValue,
  useTransition,
  Suspense,
  SuspenseList
 } from 'react';

 const [
    startTransition,
    isPending
  ] = useTransition({
    timeoutMs: 5000
  });

  npm install react-router@next react-router-dom@next

   Passing on props to each level is called Props Drilling.

   Uncontrolled Elements do not notify the component about the change in Element Property or Values, due to which the render cycle is not triggered when a component is updated using “ref”.



{
  "name": "app-name",
  "version": "0.0.1",
  "dependencies": { },
  "devDependencies": { }
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "stylelint": "stylelint src/**/index.css",
    "stylelint:fix": "stylelint src/**/index.css --fix",
    "📦": "bundlesize",
    "prettification": "prettier --write \"**/*.js\""
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "npm run prettification",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": [
        "lint-staged"
      ]
    }
  }
}
