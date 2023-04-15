import reducer from "./reducer";

function clone(reducer) {
  let state;
  let listners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i of listners) {
      i();
    }
  }

  function subscribe(listener) {
    listners.push(listener);
  }

  return { getState, dispatch, subscribe };
}

export default clone(reducer);
