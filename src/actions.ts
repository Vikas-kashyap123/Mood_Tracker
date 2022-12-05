export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = "sad button clicked";
export const CLEAR_BUTTON_CLICKED = "clear button clicked";

export const happyButtonClicked = (count: number, when: Date) => ({
  type: HAPPY_BUTTON_CLICKED,
  payload: { count, when },
});

export const sadButtonClicked = (count: number, when: Date) => ({
  type: SAD_BUTTON_CLICKED,
  payload: { count, when },
});

export const clearButtonClicked = {
  type: CLEAR_BUTTON_CLICKED,
};
