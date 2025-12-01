import { render, screen } from "@testing-library/react";
import CardServices from ".";

describe('CardServices component', () => {
  const mockProps = {
    imagePath: '/icons/phone.svg',
    cardTxt: 'Atendimento rápido e eficiente',
    cardTitle: 'Suporte 24/7',
    bgImagePath: '/bg/bg1.png'
  }

  it('should render the image with correct src and alt', () => {
    render(<CardServices {...mockProps} />)

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockProps.imagePath)
    expect(image).toHaveAttribute('alt', 'Ilustração de um telefone')
  })
})