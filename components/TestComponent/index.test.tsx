import { render, screen } from "@testing-library/react";
import TestComponent from ".";

describe("Test Component", () => {
  it("should render", () => {
    render(<TestComponent>Click me!</TestComponent>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
