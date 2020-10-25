import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';

const useDeepEffect = (effectFn, deps) => {

  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    const isSame = prevDeps.current.every((item, index) => isEqual(item, deps[index]));

    if(isFirst.current || !isSame) {
      effectFn();
    }

    isFirst.current = false;
    prevDeps.current = deps;
  }, deps);
};

export default useDeepEffect;