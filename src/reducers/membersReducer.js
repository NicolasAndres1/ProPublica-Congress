const initialState = {
  allMembers: [],
  membersToDisplay: []
};

export const SET_STATE = 'SET_STATE';
export const SEARCH_MEMBERS = 'SEARCH_MEMBERS';

const selectBy = (value, select, state) => {
  switch (select) {
    case 'id':
      return state.allMembers.filter(member => member.id.toLowerCase() === value);
    case 'gender':
      return state.allMembers.filter(member => member.gender.toLowerCase() === value);
    case 'party':
      return state.allMembers.filter(member => member.party.toLowerCase() === value);
    case 'title':
      return state.allMembers.filter(member => member.title.toLowerCase() === value);
    case 'name':
      return state.allMembers.filter(member => member.name.toLowerCase() === value);
    case 'all':
      return state.allMembers.filter(item => 
          item.id.toLowerCase() === value ||
          item.gender.toLowerCase() === value ||
          item.party.toLowerCase() === value ||
          item.title.toLowerCase() === value ||
          item.first_name.toLowerCase() === value ||
          item.last_name.toLowerCase() === value 
      );
    default:
      return state.allMembers;
  }
};

const searchAll = (input, filter, state) => {
  let updatedMembers = [];
  
  if (state)
    updatedMembers = selectBy(input.toLowerCase(), filter.toLowerCase(), state);

  if (input === '') 
    updatedMembers = state.allMembers;

  return { ...state, membersToDisplay: updatedMembers };
};

export const membersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_STATE: 
        return { ...state, membersToDisplay: action.members, allMembers: action.members };
      case SEARCH_MEMBERS:
        return searchAll(
          action.data.value.input,
          action.data.value.filter,
          action.data.membersReducer
        )
      default:
        return state;
    }
  };
  
  export default membersReducer;