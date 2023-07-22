import BestFood from "../../Componets/BestFood";
import Header from "../../Componets/Header";
import NavBar from "../../Componets/NavBar";
import styled from "@emotion/styled";
import Stats from "../../Componets/Stats";
import Menu from "../../Componets/Menu";
import Order from "../../Componets/Order";
import Footer from "../../Componets/Footer";

function Index() {
    return (
        <main>
            <SubContainerIndex>
                <NavBar />
                <Header />
                <BestFood />
                <Stats />
                <Menu />
                <Order />
            </SubContainerIndex>
            <Footer />
        </main>
    );
}

export default Index;

const SubContainerIndex = styled.main`
    width: 90%;
    margin: auto;
    padding: 3% 0;
`;
