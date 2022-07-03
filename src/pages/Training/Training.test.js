import { render, screen } from "@testing-library/react";
import Training from "./Training";

it("Find the text", () => {
  render(<Training />);
  const Element = screen.getByText(/Cross platform training/i);
  expect(Element).toBeInTheDocument();
});

it("Rendering Multiple Image", async () => {
  render(<Training />);
  const Element = await screen.findAllByRole("img");
  expect(Element.length).toBe(1);
});
