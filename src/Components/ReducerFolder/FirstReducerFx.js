export const FirstReducerFx = (state, action) => {
  switch (action.type) {

    case "load": {
      return {
        ...state,
        loading : true,
        allApiData: action.payload,
      };
    };

    case "featureDataLoad": {
      const featuredItems = state.allApiData.filter((items) => items.featured === true);
      return {
        ...state,
        loading: false,
        featureApiData: featuredItems,
      };
    };
    
    default: {
      return state;
    };
  }
};