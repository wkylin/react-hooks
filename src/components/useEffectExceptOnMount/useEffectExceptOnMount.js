import React from "react";
/**
 * Identical to React.useEffect, except that it never runs on mount. This is the equivalent of
 * the componentDidUpdate lifecycle function.
 *
 * @param {function:function} effect - A useEffect effect.
 * @param {array} dependencies - useEffect dependency list.
 */
const useEffectExceptOnMount = (effect, dependencies = []) => {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) {
      const unmount = effect();
      return () => {
        mounted.current = false;
        unmount && unmount();
      };
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
};

export default useEffectExceptOnMount;
