import actions from "./actions";

const initState  =  {
  isAuthenticated:false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_AUTH_DETAILS: {
            return {
                ...state,
               isAuthenticated:action.payload
            };
        }
        default: return state;
    }
}

export default authReducer;