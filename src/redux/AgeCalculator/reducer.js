import actions from "./actions";

const initState  =  {
  selectedDetails: undefined,
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_SELECTED_DETAILS: {
            return {
                ...state,
               selectedDetails:action.payload
            };
        }
        default: return state;
    }
}

export default searchReducer;