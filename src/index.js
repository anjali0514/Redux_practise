import store from "./store";
// import { BUGADDED, BUGRESOLVED, BUGSLOVED } from "./constants";
import { addBug, removeBug, resolveBug } from "./reducer.js";
import clone from "./clone";

console.log(store.getState());

store.subscribe(() => {
  console.log("State Changed", store.getState());
});

store.dispatch(addBug({ description: "Bug1" }));

store.dispatch(addBug({ description: "Bug2" }));

store.dispatch(removeBug({ id: 1 }));

// store.dispatch(removeBug(2));

store.dispatch(resolveBug({ id: 2 }));

console.log(store.getState());

console.log("Hello World!");
