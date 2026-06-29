import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('renders with initial count 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments count', async () => {
    render(<Counter />)
    const incrementBtn = screen.getByText('+')
    await userEvent.click(incrementBtn)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})