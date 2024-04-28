import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./Logo";

export default function App() {
  return (
    <Navbar className=" text-gray-300 flex justify-around w-full">
      <div>
        <AcmeLogo />
      </div>
      
      <div>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      </div>
      <div className=" right-1">
        <NavbarContent >
        {true ? (
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login or SignUp</Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      </div>
      
    </Navbar>
  );
}
