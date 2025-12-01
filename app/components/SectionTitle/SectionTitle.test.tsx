import { render, screen } from '@testing-library/react'
import SectionTitle from '.'

describe('SectionTitle', () => {
  it('should render text conrrectly', () => {
    render(<SectionTitle title="Título Teste" subTitle="Subtítulo Teste" />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Título Teste')
  })
})
