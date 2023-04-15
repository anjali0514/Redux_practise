import { BUGADDED, BUGSLOVED, BUGRESOLVED } from "./constants";
let lastId = 1;

/*********action******* */

import { createAction, createReducer } from "@reduxjs/toolkit";
// import { BUGADDED, BUGSLOVED, BUGRESOLVED } from "./constants";
export const addBug = createAction("addBug");
export const removeBug = createAction("removeBug");
export const resolveBug = createAction("resolveBug");

console.log("bugAdded object", addBug);

/**********reducer************* */

export default createReducer([], {
  //key:value function
  [addBug.type]: (bugs, action) => {
    bugs.push({
      id: lastId++,
      description: action.payload.description,
      resolved: false,
    });
  },
  // removeBug: (bugs, action) => {
  //   return bugs.filter((bug) => bug.id !== action.payload.id);
  // },

  //uses immer under the hood so it seems as mutating code but sctually it is not
  resolveBug: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addBug.type:
//       return [
//         ...state,
//         {
//           id: lastId++,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case removeBug.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case resolveBug.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
//}
