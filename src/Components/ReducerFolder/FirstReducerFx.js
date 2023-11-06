
export const FirstReducerFx = (state, action) => {
  switch (action.type) {

    case "load":
      return {
        ...state,
        loading : true,
        allApiData: action.payload,
      };

    case "featureDataLoad": 
      const featuredItems = state.allApiData.filter((items) => items.featured === true);
      return {
        ...state,
        loading: false,
        featureApiData: featuredItems,
      };

    case "PriceFilter":
      if (action.payload.lists === "lowPrice") {
        const lowestPrice = state.allApiData.sort((a, b) => a.price - b.price);
        return {
          ...state,
          allApiData: lowestPrice,
        };
      };

      if (action.payload.lists === "highPrice") {
        const highestPrice = state.allApiData.sort((a, b) => b.price - a.price);
        return {
          ...state,
          allApiData: highestPrice,
        };
      };

      if (action.payload.lists === "Price(a-z)") {
        const atoz = state.allApiData.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          allApiData: atoz,
        };
      };

      if (action.payload.lists === "Price(z-a)") {
        const ztoa = state.allApiData.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          allApiData: ztoa,
        };
      };

      if (action.payload.lists === "All") {
        const alldata = action.payload.secondState.secondAllApiData;
        return {
          ...state,
          allApiData: alldata,
        };
      };

      if (action.payload.lists === "Apple") {
        const appledata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: appledata,
        };
      };

      if (action.payload.lists === "Samsung") {
        const samsungdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: samsungdata,
        };
      };

      if (action.payload.lists === "Dell") {
        const delldata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: delldata,
        };
      };

      if (action.payload.lists === "Nokia") {
        const nokiadata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: nokiadata,
        };
      };

      if (action.payload.lists === "Asus") {
        const asusdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: asusdata,
        };
      };

      if (action.payload.lists === "Lenova") {
        const lenovadata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: lenovadata,
        };
      };

      if (action.payload.lists === "Rolex") {
        const rolexdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: rolexdata,
        };
      };

      // ! Search Functionality:-
      // eslint-disable-next-line
    case "searchItems":
      if (action.payload !== '') {
        const searchedItems = state.allApiData.filter(items => items.name.toLowerCase().includes(action.payload));
        return {
          ...state,
          allApiData: searchedItems,
        }
      } else if (action.payload === '') {
        return {
          ...state,
          allApiData: state.allApiData,
        }
      };

      // eslint-disable-next-line
    default: 
      return state;
  }
};