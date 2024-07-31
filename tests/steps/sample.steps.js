import { render, screen } from '@testing-library/react'
import Page from '../../src/app/page'

export function openThePage () {
  render(<Page />)
}
export function getTitle () {
  const title = screen.getByTestId('app-title')
  return title.innerHTML
}
