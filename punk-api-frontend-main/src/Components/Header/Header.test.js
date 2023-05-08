import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header text", () => {
  render(<Header />);
  const linkElement = screen.getByText(
    /On victory, you deserve beer, in defeat, you need it/i
  );
  expect(linkElement).toBeInTheDocument();
});
