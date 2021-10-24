import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../Redux/actions";
import { ReactComponent as Menubar } from "../../imges/menubar.svg";
//import { FaBars } from "react-icons/fa";
//import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyle";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.infoReducer.isLogin);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    window.scrollToTop();
  };
  const handleLogout = () => {
    dispatch(isLogin(!isLogin));
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/">Misson-Eco</NavLogo>
          <MobileIcon onClick={toggle}>
            <Menubar fill="white" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="challenge"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
                //activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="challenge"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
              >
                Challenge
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
              >
                Service
              </NavLinks>
            </NavItem>
            {!state.isLogin ? null : (
              <NavItem>
                <NavLinks
                  to="mypage"
                  //smooth={true}
                  duration={500}
                  //spy={true}
                  exact="true"
                  offset={-80}
                >
                  Mypage
                </NavLinks>
              </NavItem>
            )}
          </NavMenu>
          <NavBtn>
            {!state.isLogin ? (
              <NavBtnLink to="/login">Signin</NavBtnLink>
            ) : (
              <NavBtnLink to="/login" onClick={handleLogout}>
                Logout
              </NavBtnLink>
            )}
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
