import colors from "constants/colors";
import font from "constants/font";
import navigation from "constants/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Navbar = () => {
  const router = useRouter();
  return (
    <Nav>
      {Object.keys(navigation).map((key) => {
        const navItem = navigation[key];
        const active = router?.asPath === navItem.href;
        return (
          <Link key={navItem.href} href={navItem.href} passHref>
            <NavLink active={active}>{navItem.children}</NavLink>
          </Link>
        );
      })}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.a`
  color: ${colors.brand.delta};
  font-weight: 700;
  text-decoration: none;
  font-size: ${font.size[18]};
  ${(props: NavLinkProps) =>
    props.active &&
    css`
      color: ${colors.brand.alpha};
      font-size: ${font.size[24]};
    `}
`;

export default Navbar;
