const initialState = [];

export const ADD_STATE = 'ADD_STATE';

export const membersReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STATE: 
        return { ...state, members: action.members };
      default:
        return state;
    }
  };
  
  export default membersReducer;