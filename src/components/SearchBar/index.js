import React, { useState } from 'react'
import { connect } from 'react-redux'

import './Styles.scss'
import { filterMembers } from '../../actions/actions'

const SEARCH_FIELDS = ['All', 'ID', 'Name', 'Title', 'Gender', 'Party']

const SearchBar = (props) => {
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const changeInputHandler = (input) => 
    setInput(input)

  const changeFilterHandler = (filter) => 
    setFilter(filter)

  const submitHandler = (event) => {
    event.preventDefault()

    const { membersReducer } = props
    props.filterMembers({
      membersReducer,
      value: { input: input.trim(), filter }
    })
  }

  return (
    <form 
        onSubmit={submitHandler}
        className='searchBar'>
        <input 
            onChange={(e) => changeInputHandler(e.target.value)}
            placeholder='Search'
            className='inputSearchBar'/>
        <div 
            className='searchAndFilter'>
            <button type='submit'> Search </button>
            <div className='filter'>
                <label> Filter:  </label>
                <select
                    onChange={(e) => changeFilterHandler(e.target.value)}
                    className='inputFilter'>
                    {SEARCH_FIELDS.map((item, index) => 
                        <option
                            key={index} 
                            value={item}> { item } </option>
                    )}
                </select>
            </div>
        </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    membersReducer: state.membersReducer
  }
}

export default connect(mapStateToProps, { filterMembers })(SearchBar)
