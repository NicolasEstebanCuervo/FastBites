import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { DataContext } from "../../Context/Context";
import hamburguerIcon from "../../Assets/Icons/Hamburguer.svg";
import hamburguerButton from "../../Assets/Icons/HamburguerButton.svg";
import { Link } from "react-router-dom";

function NavBar() {
    const value = useContext(DataContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = value.menu;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleCart = () =>{
        setMenu(!menu)
    }
    
    return (
        <Nav>
            <Logo src={hamburguerIcon} alt="Hamburguer Icon" />
            <SubContainerNav>
                <HamburgerButton onClick={toggleMenu}>
                    <HamburgerIcon
                        src={hamburguerButton}
                        alt="Hamburguer Icon"
                    />
                </HamburgerButton>
                <Menu open={menuOpen}>
                    <MenuItem>
                        <StyledLink to="/">Home</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/Menu">Menu</StyledLink>
                    </MenuItem>
                    <MenuItem onClick={toggleCart}><StyledLink to="">Trolley</StyledLink></MenuItem>
                </Menu>
            </SubContainerNav>
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
        align-items: flex-start;
    }
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

const SubContainerNav = styled.div`
    width: 30%;
    gap: 10px;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const HamburgerButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
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
    list-style: none;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2% 5%;
        background: #f2f2f2;
        width: 100%;
        align-items: flex-end;
        display: ${({ open }) => (open ? "flex" : "none")};
    }
`;

const MenuItem = styled.li`
    margin-left: 10px;
    flex: 1;
    color: #000;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;
