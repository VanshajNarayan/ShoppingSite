
export const FirstReducerFx = (state, action) => {
  switch (action.type) {

    // eslint-disable-next-line
    case "load":
      return {
        ...state,
        loading : true,
        allApiData: action.payload,
      };

      // eslint-disable-next-line
    case "featureDataLoad": 
      const featuredItems = state.allApiData.filter((items) => items.featured === true);
      return {
        ...state,
        loading: false,
        featureApiData: featuredItems,
      };

      // eslint-disable-next-line
    case "Add to Cart":
      const {cartBucket } = state;
      const baskets = [...cartBucket, action.load];
      const subAmount = action.load.price * action.quatity;
      action.load.subTotal = subAmount;
      if (typeof action.load.colors === "object") {
        action.load.colors = "#000";
      };
      return {
        ...state,
        cartBucket: baskets,
      };

      // eslint-disable-next-line
    case "deleteItems":
      const deletedItems = state.cartBucket.filter((products) => products?.id !== action.CartItems?.id);
      const totalPrice = deletedItems.reduce((accumulator, currentValue) => accumulator + currentValue.subTotalAmount, 0);
      return {
        ...state,
        cartBucket: deletedItems,
        totalAmount : totalPrice,
      };

      // eslint-disable-next-line
    case "clearChart":
      const clearChart = [];
      return {
        ...state,
        cartBucket: clearChart,
      };

      // eslint-disable-next-line
    case "quatityminus":
      if (action.cartMenu.ItemQuatity > 1) {
        let minusQuantity = action.cartMenu.ItemQuatity - 1;
        action.cartMenu.ItemQuatity = minusQuantity;
      };

      // eslint-disable-next-line
    case "AddSubTotal":
      if (state.cartBucket.length >= 1) {
        const totalPrice = state.cartBucket.reduce((accumulator, currentValue) => accumulator + currentValue.subTotalAmount, 0);
        return {
          ...state,
          totalAmount : totalPrice,
        }
      };

      // eslint-disable-next-line
    case "quatityplus":
      if (action.cartMenu.ItemQuatity < 5) {
        let plusQuantity = action.cartMenu.ItemQuatity + 1;
        action.cartMenu.ItemQuatity = plusQuantity;
      };

      // eslint-disable-next-line
    case "PriceFilter":
      if (action.payload?.lists === "lowPrice") {
        const lowestPrice = state.allApiData.sort((a, b) => a.price - b.price);
        return {
          ...state,
          allApiData: lowestPrice,
        };
      };

      if (action.payload?.lists === "highPrice") {
        const highestPrice = state.allApiData.sort((a, b) => b.price - a.price);
        return {
          ...state,
          allApiData: highestPrice,
        };
      };

      if (action.payload?.lists === "Price(a-z)") {
        const atoz = state.allApiData.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          allApiData: atoz,
        };
      };

      if (action.payload?.lists === "Price(z-a)") {
        const ztoa = state.allApiData.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          allApiData: ztoa,
        };
      };

      if (action.payload?.lists === "All") {
        const alldata = action.payload.secondState.secondAllApiData;
        return {
          ...state,
          allApiData: alldata,
        };
      };

      if (action.payload?.lists === "Apple") {
        const appledata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: appledata,
        };
      };

      if (action.payload?.lists === "Samsung") {
        const samsungdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: samsungdata,
        };
      };

      if (action.payload?.lists === "Dell") {
        const delldata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: delldata,
        };
      };

      if (action.payload?.lists === "Nokia") {
        const nokiadata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: nokiadata,
        };
      };

      if (action.payload?.lists === "Asus") {
        const asusdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: asusdata,
        };
      };

      if (action.payload?.lists === "Lenova") {
        const lenovadata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: lenovadata,
        };
      };

      if (action.payload?.lists === "Rolex") {
        const rolexdata = action.payload.secondState.secondAllApiData.filter(items => items.company.toLowerCase() === action.payload.lists.toLowerCase());
        return {
          ...state,
          allApiData: rolexdata,
        };
      };

      // ! color logic:-
      // eslint-disable-next-line
    case "allClr":
      if (action.payload?.text.textContent === "All") {
        const allClrdata = action.payload.secondState.secondAllApiData;
        return {
          ...state,
          allApiData: allClrdata,
        };
      };

      // eslint-disable-next-line
    case "colorLogic":
      if (action.payload?.clr === "#ff0000") {
        const ff0000Data = action.payload.secondState.secondAllApiData.filter((items) => items.colors.includes(action.payload.clr));
        return {
          ...state,
          allApiData: ff0000Data,
        }
      };

      if (action.payload?.clr === "#000000") {
        const data000000 = action.payload.secondState.secondAllApiData.filter((items) => items.colors.includes(action.payload.clr));
        return {
          ...state,
          allApiData: data000000,
        }
      };

      if (action.payload?.clr === "#CDD0D0") {
        const CDD0D0Data = action.payload.secondState.secondAllApiData.filter((items) => items.colors.includes(action.payload.clr));
        return {
          ...state,
          allApiData: CDD0D0Data,
        }
      };

      if (action.payload?.clr === "#22D3EF") {
        const data22D3EF = action.payload.secondState.secondAllApiData.filter((items) => items.colors.includes(action.payload.clr));
        return {
          ...state,
          allApiData: data22D3EF,
        }
      };

      if (action.payload?.clr === "#000") {
        const data000 = action.payload.secondState.secondAllApiData.filter((items) => items.colors.includes(action.payload.clr));
        return {
          ...state,
          allApiData: data000,
        }
      };      

      // ! clear Button:-
      // eslint-disable-next-line
    case "clearFilter":
      const clearBtnData = action.payload?.secondAllApiData;
      return {
        ...state,
        allApiData: clearBtnData,
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
    case "categoryFilter":
      if (action.payload.categy === "All") {
        const allCategoryData = action.payload.secondState.secondAllApiData;
        return {
          ...state,
          allApiData: allCategoryData,
        }
      };

      if (action.payload.categy === "Mobile") {
        const mobileCategory = action.payload.secondState.secondAllApiData.filter((items) => items.category.toLowerCase() === action.payload.categy.toLowerCase());
        return {
          ...state,
          allApiData: mobileCategory,
        }
      };

      if (action.payload.categy === "Laptop") {
        const laptopCategory = action.payload.secondState.secondAllApiData.filter((items) => items.category.toLowerCase() === action.payload.categy.toLowerCase());
        return {
          ...state,
          allApiData: laptopCategory,
        }
      };

      if (action.payload.categy === "Computer") {
        const computerCategory = action.payload.secondState.secondAllApiData.filter((items) => items.category.toLowerCase() === action.payload.categy.toLowerCase());
        return {
          ...state,
          allApiData: computerCategory,
        }
      };

      if (action.payload.categy === "Accessories") {
        const accessoriesCategory = action.payload.secondState.secondAllApiData.filter((items) => items.category.toLowerCase() === action.payload.categy.toLowerCase());
        return {
          ...state,
          allApiData: accessoriesCategory,
        }
      };

      if (action.payload.categy === "Watch") {
        const watchCategory = action.payload.secondState.secondAllApiData.filter((items) => items.category.toLowerCase() === action.payload.categy.toLowerCase());
        return {
          ...state,
          allApiData: watchCategory,
        }
      };

      // eslint-disable-next-line
    default : 
      return state;
  }
};