import produce from "immer";
import { AnyAction } from "redux";
import {
  CLEAR_BUTTON_CLICKED,
  SAD_BUTTON_CLICKED,
} from "../actions/moodActions";
import { Moment } from "../store";

export type State = {
  sadMoments: Moment[];
};

export const initialState: State = {
  sadMoments: [],
};

function SadReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(state, (draft) => {
        draft.sadMoments.push(action.payload);
      });
    case CLEAR_BUTTON_CLICKED:
      return { ...state, sadMoments: [] };

    default:
      return state;
  }
}

export default SadReducer;
