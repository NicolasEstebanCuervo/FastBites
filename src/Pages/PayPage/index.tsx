import styled from "@emotion/styled";
import NavBar from "../../Componets/NavBar";
import Footer from "../../Componets/Footer";
import FoodOrder from "../../Componets/FoodOrder";

export default function PayPage() {
    return (
        <main>
            <SubContainerPayPage>
                <NavBar />
                <FoodOrder />
            </SubContainerPayPage>
            <Footer />
        </main>
    );
}

const SubContainerPayPage = styled.main`
    width: 90%;
    margin: auto;
    padding: 3% 0;
`;
