import NavBar from "../../Componets/NavBar";
import styled from "@emotion/styled";
import Footer from "../../Componets/Footer";
import  MenuList  from "../../Componets/MenuList";
import { Cart } from "../../Componets/NavBar/cart";

function Menu() {
    return (
        <main>
            <SubContainerIndex>
                <NavBar />
                <MenuList/>
                <Cart/>
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
