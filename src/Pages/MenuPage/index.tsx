import NavBar from "../../Componets/NavBar";
import styled from "@emotion/styled";
import Footer from "../../Componets/Footer";
import  MenuList  from "../../Componets/MenuList";
import { Carrito } from "../../Componets/NavBar/carrito";

function Menu() {
    return (
        <main>
            <SubContainerIndex>
                <NavBar />
                <MenuList/>
                <Carrito/>
            </SubContainerIndex>
            <Footer />
        </main>
    );
}

export default Menu;

const SubContainerIndex = styled.main`
    width: 90%;
    margin: auto;
    padding: 3% 0;
`;
