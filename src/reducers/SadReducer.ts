import { AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "../actions";
import { Moment } from "../store";

export type SadState = {
  sadMoments: Moment[];
};

export const initialSadState: SadState = {
  sadMoments: [],
};

function SadReducer(currentSadState: SadState, action: AnyAction) {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return {
        ...currentSadState,
        sadMoments: [
          ...currentSadState.sadMoments,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
    case CLEAR_BUTTON_CLICKED:
      return {
        ...currentSadState,
        sadMoments: [],
      };

    default:
      return currentSadState;
  }
}

export default SadReducer;
