import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

it("Find the text", () => {
  render(<Nav />);
  const Element = screen.getByText(/BJIT Academy/i);
  expect(Element).toBeInTheDocument();
});

it("Rendering Multiple Image", async () => {
  render(<Nav />);
  const navbarElement = await screen.findAllByRole("img");
  expect(navbarElement.length).toBe(3);
});
