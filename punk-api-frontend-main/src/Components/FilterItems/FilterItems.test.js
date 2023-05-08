import { render, screen } from "@testing-library/react";
import FilterItems from "./FilterItems";
describe("test FilterItems Component", () => {
  test("renders checkbox", async () => {
    render(<FilterItems />);
    const checkboxlist = await screen.getAllByRole("checkbox");
    expect(checkboxlist).toBeInTheDocument();
  });
});
