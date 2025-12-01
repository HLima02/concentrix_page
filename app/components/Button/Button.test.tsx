import { render, screen } from "@testing-library/react";
import Button from ".";

describe('Button Component', () => {
  it('should render the children correctly', () => {
    render(<Button  
      txt_color="text-white"
      background_color="#000"
      background_hover="#333"
      w_size="200px"
      border="1px solid #fff"
    >
      Clique me
    </Button>)

    expect(screen.getByRole('button')).toHaveTextContent('Clique me')
  })
})