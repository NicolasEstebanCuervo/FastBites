import { DataProvider } from "../Context/Context";
import PayPage from "./PayPage";
import IndexPage from "./IndexPage";
import MenuPage from "./MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThanksPage from "./ThanksPage";

const Index = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage></IndexPage>}></Route>
                    <Route path="/Menu" element={<MenuPage></MenuPage>}></Route>
                    <Route path="/Pay" element={<PayPage></PayPage>}></Route>
                    <Route path="/Thanks" element={<ThanksPage></ThanksPage>}></Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
};

export default Index;
