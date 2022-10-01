import Navbar from ".";
import { render, screen } from "@testing-library/react";
import navigation from "constants/navigation";

describe("Navbar component", () => {
  it("should contain links to every navigation item", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    const navItems = Object.keys(navigation);
    navItems.forEach((item) => {
      const link = screen.getByRole("link", {
        name: navigation[item].children,
      });
      expect(link).toHaveAttribute("href", navigation[item].href);
    });
  });
});
