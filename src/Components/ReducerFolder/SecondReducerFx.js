export const SecondReduerFx = (state, action) => {
  switch (action.type) {
    case "loadSecondApi":
      return {
        ...state,
        secondAllApiData: action.payload,
      };

    default:
      return state;
  }
};
