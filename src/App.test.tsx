import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'
import { initLang } from './lang/i18n'

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

test('renders App component', () => {
  initLang()
  render(<App />)
  const linkElement = screen.getByText("Reactle")
  expect(linkElement).toBeInTheDocument()
})
