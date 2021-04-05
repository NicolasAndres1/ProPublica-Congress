import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import thunk from 'redux-thunk';
import { initialState } from '../../../reducers/membersReducer'
import reducer from '../../../reducers/rootReducer'
import MembersList from '../index'

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {}
) => {
    console.log('ESTADOOOOOOOOOOOOOOOOOOOOOOOOOO: ', initialState)
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

 afterEach(cleanup);

it('checks initial state is correct', () => {
    const { getByTestId } = renderWithRedux(<MembersList />)
    expect(getByTestId('memberList')).toHaveTextContent({
        allMembers: [],
        membersToDisplay: [],
        loading: false,
        error: false
    })
  })