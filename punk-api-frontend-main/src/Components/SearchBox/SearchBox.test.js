import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

test(" render header ", () => {
  const Component = render(<SearchBox />);
  expect(
    Component.getByPlaceholderText(/Start the search.../i)
  ).toBeInTheDocument();
});
