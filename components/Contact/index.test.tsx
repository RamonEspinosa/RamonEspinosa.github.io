import { render, screen } from "@testing-library/react";
import Contact from ".";

describe("Contact component", () => {
  const importantLink = [
    {
      name: /github/i,
      href: "https://github.com/RamonEspinosa",
    },
  ];
  importantLink.forEach((link) => {
    it(`should have a link to ${link.href}`, async () => {
      render(<Contact />);
      const anchor = await screen.findByRole("link", {
        name: link.name,
      });
      expect(anchor).toHaveAttribute("href", link.href);
    });
  });
});
