import { AnyAction } from "redux";
import {
  CLEAR_BUTTON_CLICKED,
  HAPPY_BUTTON_CLICKED,
} from "../actions/moodActions";
import { Moment } from "../store";
import produce from "immer";

export type HappyState = {
  happyMoments: Moment[];
};

export const initialHappyState: HappyState = {
  happyMoments: [],
};

function HappyReducer(
  currentHappyState = initialHappyState,
  action: AnyAction
) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return produce(currentHappyState, (draft) => {
        draft.happyMoments.push(action.payload);
      });
    case CLEAR_BUTTON_CLICKED:
      return { ...currentHappyState, happyMoments: [] };

    default:
      return currentHappyState;
  }
}

export default HappyReducer;
