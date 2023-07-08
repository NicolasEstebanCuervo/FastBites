import { useState } from "react";
import styled from "@emotion/styled";
import hamburguerIcon from "../../Assets/Icons/Hamburguer.svg";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Nav>
            <Logo src={hamburguerIcon} alt="Hamburguer Icon" />
            <HamburgerButton onClick={toggleMenu}>
                <HamburgerIcon src={hamburguerIcon} alt="Hamburguer Icon" />
            </HamburgerButton>
            <Menu open={menuOpen}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Nav>
    );
}

export default NavBar;

const Nav = styled.nav`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

const HamburgerButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const HamburgerIcon = styled.img`
    width: 30px;
    height: 30px;
`;

interface MenuProps {
    open: boolean;
}

const Menu = styled.ul<MenuProps>`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 30%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        display: ${({ open }) => (open ? "flex" : "none")};
    }
`;

const MenuItem = styled.li`
    margin-left: 10px;
    flex: 1;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;