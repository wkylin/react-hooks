// /* The below code is inspired by apollo graphql,
// check: https://github.com/apollographql/apollo-client/blob/main/src/react/hooks/utils/useDeepMemo.ts
// */
// import { useRef } from "react";
// import { equal } from "@wry/equality";

// /**
//  * Memoize a result using deep equality. This hook has two advantages over
//  * React.useMemo: it uses deep equality to compare memo keys, and it guarantees
//  * that the memo function will only be called if the keys are unequal.
//  * React.useMemo cannot be relied on to do this, since it is only a performance
//  * optimization (see https://reactjs.org/docs/hooks-reference.html#usememo).
//  */
// function useDeepMemo<TKey, TValue>(memoFn: () => TValue, key: TKey): TValue {
//   const ref = useRef<{ key: TKey; value: TValue }>();

//   if (!ref.current || !equal(key, ref.current.key)) {
//     ref.current = { key, value: memoFn() };
//   }

//   return ref.current.value;
// }

// export { useDeepMemo };

import React from 'react';
import { isEqual } from 'lodash';


export const useDeepCompareMemoize = (value) => {
  const ref = React.useRef()
  if (!isEqual(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}

export const useDeepCompareMemo = (callback, dependencies) => {
  return React.useMemo(callback, useDeepCompareMemoize(dependencies));
}

// function useDeepMemo(memoFn, key) {
//   const ref = useRef()
//   if (!ref.current || !isEqual(key, ref.current.key)) {
//     ref.current = { key, value: memoFn() }
//   }

//   return ref.current.value
// }

// function useAPI({ url, body }) {
//   const [response, setResponse] = useState(null)
//   const cachedBody = useDeepMemo(() => body, [body])

//   useEffect(() => {
//     // do the request here
//   }, [url, cachedBody])
//   return response
// }



//  const child1 = useDeepCompareMemo(() => <Child1 a={slideA} />, [slideA]);
// Only re-rendered if `b` changes:
// const child2 = useDeepCompareMemo(() => <Child2 b={slideB} />, [slideB]);