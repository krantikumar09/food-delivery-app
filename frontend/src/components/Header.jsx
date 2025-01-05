import { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header relative py-4">
        <div className="container">
        <div className="header-row">
          {/* logo */}
          <a className="logo" href="#">
            The Kitchn.
          </a>

          {/* header center */}
          <Navbar navOpen={navOpen} />

          {/* header right */}
          <div className="header-right flex items-center gap-2">
            {/* search button */}
            <Button variant="iconBtn" size="iconBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>

            {/* cart button */}
            <Button variant="iconBtn" size="iconBtn" className="outline-none">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>

            {/* menu button */}
            <Button
              className="menu-btn md:hidden"
              variant="outline"
              size="iconBtn"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {navOpen ? (
                <FontAwesomeIcon icon={faClose} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </Button>

            {/* login / signup button */}
            <LoginButton label="Login" className="hidden md:block" />

            {/* avatar */}
            {/* <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
          </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
