import { useState, useContext} from "react";
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
        <Nav open={menuOpen}>
            <SubContainerNav>
                <ContainerIcons>
                    <Logo src={hamburguerIcon} alt="Hamburguer Icon" />
                    
                    <HamburgerButton onClick={toggleMenu}>
                        <HamburgerIcon
                            src={hamburguerButton}
                            alt="Hamburguer Icon"
                        />
                    </HamburgerButton>
                </ContainerIcons>
                <Menu open={menuOpen}>
                    <MenuItem  onClick={() => setMenu(false)} to="/">
                        Home
                    </MenuItem>
                    <MenuItem  onClick={() => setMenu(false)} to="/Menu">
                        Menu
                    </MenuItem>
                    <MenuItem onClick={toggleCart} to="">Trolley</MenuItem>
                </Menu>
            </SubContainerNav>
        </Nav>
    );
}

export default NavBar;

interface MenuProps {
    open: boolean;
}

const Nav = styled.nav<MenuProps>`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        align-items: flex-start;
        background: #f2f2f2;
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: 400px) {
        width: 15vw;
    }
`;

const SubContainerNav = styled.div`
    width: 100%;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: normal;
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

    @media (max-width: 400px) {
        width: 15vw;
    }
`;

const Menu = styled.ul<MenuProps>`
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: 5%;
        display: ${({ open }) => (open ? "flex" : "none")};
    }
`;

const MenuItem = styled(Link)`
    margin-left: 40px;
    flex: 1;
    color: #000;
    width: 100%;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-left: 0px;
        padding: 0 2%;

        :hover{
        background: #d1cece;
    }
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }

    @media (max-width: 300px) {
        font-size: 8vw;
    }

    @media (max-width: 200px) {
        font-size: 10vw;
    }
`;
