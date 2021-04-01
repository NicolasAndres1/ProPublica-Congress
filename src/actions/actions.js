import axios from 'axios'

export const getMembersSuccess = members => {
  return {
    type: 'SET_STATE',
    members
  }
}

export const filterMembers = (data) => {
  return {
    type: 'SEARCH_MEMBERS',
    data
  }
}

export const getAllMembers = () => {
  return dispatch => {
    axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
      headers: { 'X-API-Key': 'W2E9JmXSgPD2ZZHunBHRN7iQWeHqDnJeMNWohZ5D' }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Members could not be fetched')
        }
        return res
      })
      .then(data => {
        dispatch(getMembersSuccess(data.data.results[0].members))
      })
      .catch(err => {
        console.error(err)
      })
  }
}
