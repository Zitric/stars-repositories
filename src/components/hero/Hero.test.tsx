import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
