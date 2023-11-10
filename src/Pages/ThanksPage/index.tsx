import styled from "@emotion/styled";
import NavBar from "../../Componets/NavBar";
import Footer from "../../Componets/Footer";
import ThanksMessage from "../../Componets/ThanksMessage";

export default function ThanksPage() {
    return (
        <main>
            <SubContainerThanksPage>
                <NavBar />
                <ThanksMessage />
            </SubContainerThanksPage>
            <Footer />
        </main>
    );
}

const SubContainerThanksPage= styled.main`
    width: 90%;
    margin: auto;
    padding: 3% 0;
`;
