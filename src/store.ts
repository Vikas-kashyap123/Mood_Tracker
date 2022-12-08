import { combineReducers, createStore } from "redux";
import HappyReducer from "./reducers/HappyReducer";
import productsReducer from "./reducers/products";
import SadReducer from "./reducers/SadReducer";

export type Moment = {
  intensity: number;
  when: Date;
};

const reducer = combineReducers({
  sad: SadReducer,
  happy: HappyReducer,
  products: productsReducer,
  loading: productsReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// switch (action.type) {
//   case HAPPY_BUTTON_CLICKED:
//     return {
//       ...currentState,
//       happyMoments: [
//         ...currentState.happyMoments,
//         { intensity: action.payload.count, when: action.payload.when },
//       ],
//     };
//   case SAD_BUTTON_CLICKED:
//     return {
//       ...currentState,
//       sadMoments: [
//         ...currentState.sadMoments,
//         { intensity: action.payload.count, when: action.payload.when },
//       ],
//     };
//   case CLEAR_BUTTON_CLICKED:
//     return { ...currentState, happyMoments: [], sadMoments: [] };
//   default:
//     return { ...currentState };
// }

// former style for making parent reducer
// currentState should be non-Mutating
// const reducer = (currentState = initialState, action: AnyAction): State => {
//   return {
//     sad: SadReducer(currentState.sad, action),
//     happy: HappyReducer(currentState.happy, action),
//   };
// };
