import { AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, HAPPY_BUTTON_CLICKED } from "../actions";
import { Moment } from "../store";

export type HappyState = {
  happyMoments: Moment[];
};

export const initialHappyState: HappyState = {
  happyMoments: [],
};

function HappyReducer(currentHappyState: HappyState, action: AnyAction) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentHappyState,
        happyMoments: [
          ...currentHappyState.happyMoments,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
    case CLEAR_BUTTON_CLICKED:
      return {
        ...currentHappyState,
        happyMoments: [],
      };
    default:
      return currentHappyState;
  }
}

export default HappyReducer;
