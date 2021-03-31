import axios from "axios";

export const getMembersSuccess = members => {
    return {
      type: "ADD_STATE",
      members
    };
  };

export const getAllMembers = () => {
    return dispatch => {
        axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
            headers: { 'X-API-Key': 'W2E9JmXSgPD2ZZHunBHRN7iQWeHqDnJeMNWohZ5D' }
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Failed to fetch.");
                }
                return res;
            })
            .then(data => {
                dispatch(getMembersSuccess(data.data.results[0].members))
            })
            .catch(err => {
                console.error(err)
            })
    }
}