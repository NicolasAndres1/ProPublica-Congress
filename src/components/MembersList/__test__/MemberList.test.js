import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import thunk from 'redux-thunk'
import { initialState } from '../../../reducers/membersReducer'
import reducer from '../../../reducers/rootReducer'
import MembersList from '../index'

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}

afterEach(cleanup)

test('checks initial state is correct', () => {
  const { getByTestId } = renderWithRedux(<MembersList />)
  expect(reducer(initialState, {})).toEqual({
    allMembers: [],
    membersToDisplay: [],
    loading: false,
    error: false
  })
})
