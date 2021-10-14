import { useReducer, useCallback } from 'react';
import Resource from '../helpers/Resource';

function httpReducer(state, action) {
  if (action.type === Resource.HttpSatus.SEND) {
    return {
      data: null,
      error: null,
      status: Resource.ProcessStatus.PENDING,
    };
  }

  if (action.type === Resource.HttpSatus.SUCCESS) {
    return {
      data: action.reponseData,
      error: null,
      status: Resource.ProcessStatus.COMPLETED,
    };
  }

  if (action.type === Resource.HttpSatus.ERROR) {
    return {
      data: null,
      error: null,
      status: Resource.ProcessStatus.COMPLETED,
    };
  }

  return state;
}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async (requestData) => {
    dispatch({ type: Resource.HttpSatus.SEND });
    try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: Resource.HttpSatus.SUCCESS, responseData});
    } catch (error) {
      dispatch({
        type: Resource.HttpSatus.ERROR,
        errorMessage: error.message || 'Có Lỗi xảy ra!',
      });
    }
  }, [requestFunction]);

  return {
    sendRequest,
    ...httpState,
  };
}
