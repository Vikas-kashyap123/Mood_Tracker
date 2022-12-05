import { AnyAction, createStore } from "redux";
import { CLEAR_BUTTON_CLICKED } from "./actions";
import HappyReducer, {
  HappyState,
  initialHappyState,
} from "./reducers/HappyReducer";
import SadReducer, { initialSadState, SadState } from "./reducers/SadReducer";

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = {
  sad: SadState;
  happy: HappyState;
};

const initialState: State = {
  sad: initialSadState,
  happy: initialHappyState,
};

// currentState should be non-Mutating
const reducer = (currentState = initialState, action: AnyAction): State => {
  return {
    sad: SadReducer(currentState.sad, action),
    happy: HappyReducer(currentState.happy, action),
  };
};

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
