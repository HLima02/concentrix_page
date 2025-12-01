import { render, screen } from "@testing-library/react";
import CardBenefits from ".";

describe('Card Benefits', () => {
  const mockProps = {
    label: 'Benefício Teste',
    cardImage: '/img/teste.png',
    cardTitle: 'Título de Teste'
  }

  it('should renders the label correctly', () => {
    render(<CardBenefits {...mockProps} />)

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Benefício Teste')
  })
  
})