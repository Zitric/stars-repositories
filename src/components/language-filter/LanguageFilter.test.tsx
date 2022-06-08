import { screen } from '@testing-library/react'
import { render } from '../../test/utils'
import { LanguageFilter } from './LanguageFilter'

describe('LanguageFilter', () => {
  it('Should render typescript button and javascripot button', () => {
    const testOnClick = jest.fn()

    render(
      <LanguageFilter
        languageFilters={{ typescript: true, javascript: true }}
        toggleLanguageFilter={testOnClick}
      />,
    )

    const TypescriptButtonText = screen.getByText('typescript').innerHTML
    const JavascriptButtonText = screen.getByText('javascript').innerHTML

    expect(TypescriptButtonText).toBe('typescript')
    expect(JavascriptButtonText).toBe('javascript')
  })
})
