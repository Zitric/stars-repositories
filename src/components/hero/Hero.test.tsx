import { screen } from '@testing-library/react'
import { render } from '../../test/utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('Should show the default title', () => {
    render(<Hero />)

    const defaultTitle = screen.getByText('Most starred repositories')

    expect(defaultTitle).toBeInTheDocument()
  })

  it('Should show props title', () => {
    render(<Hero title={'My favorite title'} />)

    const defaultTitle = screen.getByText('My favorite title')

    expect(defaultTitle).toBeInTheDocument()
  })
})
