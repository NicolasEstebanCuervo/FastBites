import { useEffect } from "react";
import NavBar from "../../Componets/NavBar";
import styled from "@emotion/styled";
import Footer from "../../Componets/Footer";
import  MenuList  from "../../Componets/MenuList";
import { Cart } from "../../Componets/NavBar/cart";

function Menu() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <SubContainerIndex>
                <NavBar />
                <Cart/>
                <MenuList/>
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
