import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-6 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
