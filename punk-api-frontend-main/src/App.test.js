import { render, screen } from "@testing-library/react";
import App from "./App";

test(" render header ", () => {
  const Component = render(<App />);
  expect(Component.getByTestId("header")).toBeTruthy();
});
