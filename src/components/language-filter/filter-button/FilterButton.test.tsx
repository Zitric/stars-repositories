import { screen } from '@testing-library/react'
import { render } from '../../../test/utils'
import { FilterButton } from './FilterButton'

describe('Button', () => {
  it('Should have class', async () => {
    const testOnClick = jest.fn()
    const language = 'typescript'

    render(
      <FilterButton language={language} value={true} onClick={testOnClick} />,
    )

    const Button = screen.getByText(language)
    expect(Button).toHaveClass('chakra-button')
  })
})
