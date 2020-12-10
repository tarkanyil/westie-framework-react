import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">
          <FontAwesomeIcon icon={["fab", "apple"]} />
          Westie Framework
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <Form inline>
              <Button color="info" size="sm">
                Log In
              </Button>{" "}
              <Button outline color="info" size="sm">
                Sign Up
              </Button>{" "}
            </Form>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;