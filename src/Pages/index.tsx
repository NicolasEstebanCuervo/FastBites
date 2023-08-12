import { DataProvider } from "../Context/Context";
import IndexPage from "./IndexPage";
import Menu from "./MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage></IndexPage>}></Route>
                    <Route path="/Menu" element={<Menu></Menu>}></Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
};

export default Index;
