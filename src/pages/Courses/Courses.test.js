import { render, screen } from "@testing-library/react";
import Courses from "./Courses";

it("Find the text", () => {
  render(<Courses />);
  const Element = screen.getByText(/Cross platform courses/i);
  expect(Element).toBeInTheDocument();
});

it("Rendering Multiple Image", async () => {
  render(<Courses />);
  const navbarElement = await screen.findAllByRole("img");
  expect(navbarElement.length).toBe(3);
});
