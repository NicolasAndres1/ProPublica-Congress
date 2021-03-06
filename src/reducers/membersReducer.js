import { 
  FETCHING_DATA,
  SET_STATE,
  SEARCH_MEMBERS,
  SET_STATE_FAILED
} from '../actions/actions'

const initialState = {
  allMembers: [],
  membersToDisplay: [],
  loading: false,
  error: false
}

const selectBy = (value, select, state) => {
  switch (select) {
    case 'id':
      return state.allMembers.filter(member => member.id.toLowerCase().includes(value))
    case 'gender':
      return state.allMembers.filter(member => member.gender.toLowerCase().includes(value))
    case 'party':
      return state.allMembers.filter(member => member.party.toLowerCase().includes(value))
    case 'title':
      return state.allMembers.filter(member => member.title.toLowerCase().includes(value))
    case 'name':
      return state.allMembers.filter(member => 
        member.first_name.toLowerCase().includes(value) ||
        member.last_name.toLowerCase().includes(value))
    case 'all':
      return state.allMembers.filter(item => 
        item.id.toLowerCase().includes(value) ||
        item.gender.toLowerCase().includes(value) ||
        item.party.toLowerCase().includes(value) ||
        item.title.toLowerCase().includes(value) ||
        item.first_name.toLowerCase().includes(value) ||
        item.last_name.toLowerCase().includes(value) 
      )
    default:
      return state.allMembers
  }
}

const searchAll = (input, filter, state) => {
  let updatedMembers = []
  
  if (state) {
    updatedMembers = selectBy(input.toLowerCase(), filter.toLowerCase(), state)
  }

  if (input === '') {
    updatedMembers = state.allMembers
  }

  return { ...state, membersToDisplay: updatedMembers }
}

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true
      }
    case SET_STATE: 
      return { 
        ...state, 
        membersToDisplay: action.members, 
        allMembers: action.members,
        loading: false
      }
    case SET_STATE_FAILED:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case SEARCH_MEMBERS:
      return searchAll(
        action.data.value.input,
        action.data.value.filter,
        action.data.membersReducer
      )
    default:
      return state
  }
}

export default membersReducer
