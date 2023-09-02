import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("Should have Docs text", () => {
    render(<Home />); //ARRANGE

    const myElem = screen.getByText("Docs"); //ACT

    expect(myElem).toBeInTheDocument(); //ASSERT
  });
});
