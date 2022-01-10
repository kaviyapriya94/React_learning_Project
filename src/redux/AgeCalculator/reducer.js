import actions from "./actions";

const initState  =  {
  age: {}
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_SELECTED_DETAILS: {
            return {
                ...state,
               age:action.payload
            };
        }
        default: return state;
    }
}

export default searchReducer;