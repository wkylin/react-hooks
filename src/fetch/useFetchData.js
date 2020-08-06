import { useReducer, useRef, useMemo, useEffect } from 'react';

const useForceUpdate = () => useReducer((state) => !state, false)[1];

const createPromiseResolver = () => {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return { resolve, promise };
};

const createFetchError = (error) => {
  return error;
};


export const useFetch = (input, opts = {}) => {
  const forceUpdate = useForceUpdate();
  const error = useRef(null);
  const loading = useRef(false);
  const data = useRef(null);
  const promiseResolver = useMemo(createPromiseResolver, [input, opts]);

  useEffect(() => {
    let finished = false;
    const abortController = new AbortController();
    (async () => {
      if (!input) return;
      // start fetching
      loading.current = true;
      forceUpdate();
      const onFinish = (e, d) => {
        if (!finished) {
          finished = true;
          error.current = e;
          data.current = d;
          loading.current = false;
        }
      };
      try {
        const { readBody = (body) => body.json(), ...init } = opts;
        const response = await fetch(input, {
          ...init,
          signal: abortController.signal
        });
        // check response
        if (response.ok) {
          const body = await readBody(response);
          onFinish(null, body);
        } else {
          onFinish(createFetchError(response), null);
        }
      } catch (e) {
        onFinish(e, null);
      }
      // finish fetching
      promiseResolver.resolve();
    })();
    const cleanup = () => {
      if (!finished) {
        finished = true;
        abortController.abort();
      }
      error.current = null;
      loading.current = false;
      data.current = null;
    };
    return cleanup;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, opts]);

  if (loading.current) throw promiseResolver.promise;
  return {
    error: error.current,
    data: data.current,
    loading: loading.current
  };
};

export default useFetch;