import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

const mockContext = { loading: false }

vi.mock('./context', () => ({
  useGlobalContext: () => mockContext,
}))

vi.mock('./Navbar', () => ({ default: () => <div>Navbar</div> }))
vi.mock('./CartContainer', () => ({ default: () => <div>CartContainer</div> }))

describe('App', () => {
  it('renders main content when not loading', () => {
    render(<App />)
    expect(screen.getByText('Navbar')).toBeInTheDocument()
    expect(screen.getByText('CartContainer')).toBeInTheDocument()
  })

  it('shows loading indicator when loading', () => {
    mockContext.loading = true
    const { container } = render(<App />)
    expect(container.querySelector('.loading')).toBeInTheDocument()
  })
})
