import React from 'react'
import Header from '../index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('header renders with correct text', () => {
  const component = render(<Header title='ProPublica Congress'/>)
  const titleEl = component.getByTestId('title')

  expect(titleEl.textContent).toBe('ProPublica Congress')
})
