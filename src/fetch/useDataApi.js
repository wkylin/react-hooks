import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState(initialData);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      // setIsError(false);
      // setIsLoading(true);
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        // setData(result.data);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        // setIsError(true);
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
      // setIsLoading(false);
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  // return [{ data, isLoading, isError }, setUrl];
  return [state, setUrl];
};

export default useDataApi;
