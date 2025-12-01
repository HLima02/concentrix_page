import { render, screen } from "@testing-library/react";
import ArrowBottomBtn from ".";

describe("ArrowButton", () => {
  it('Should render the link correctly', () => {
    render(<ArrowBottomBtn arrowLink="#section" />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#section')
  })
})