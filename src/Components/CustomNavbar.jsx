import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import colorConstants from "../Content/Color.json";

const CustomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <BootstrapNavbar
        style={{ backgroundColor: colorConstants.BackgroundColor }}
        expand="lg"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <div className="d-flex align-items-center">
              <img
                src="https://newsdata.io/images/global/newsdata-icon.png"
                alt="news data logo"
                width="10%"
                height="20%"
                className="navbar-brand"
              />
            </div>
          </Link>
          <div>
            <NavbarToggler onClick={toggleMobileMenu} />
            <Collapse isOpen={isMobileMenuOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link
                    to="/business"
                    className="nav-link text-white fs-5 fw-light mx-md-3"
                    onClick={toggleMobileMenu}
                  >
                    Business
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/entertainment"
                    className="nav-link text-white fs-5 fw-light mx-md-3"
                    onClick={toggleMobileMenu}
                  >
                    Entertainment
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/tourism"
                    className="nav-link text-white fs-5 fw-light mx-md-3"
                    onClick={toggleMobileMenu}
                  >
                    Tourism
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/education"
                    className="nav-link text-white fs-5 fw-light mx-md-3"
                    onClick={toggleMobileMenu}
                  >
                    Education
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/food"
                    className="nav-link text-white fw-light fs-5 mx-md-3"
                    onClick={toggleMobileMenu}
                  >
                    Food
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </BootstrapNavbar>
    </div>
  );
};

export default CustomNavbar;
