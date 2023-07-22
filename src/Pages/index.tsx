import { DataProvider } from "../Context/Context";
import Index from "./IndexPage";
import Menu from "./MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Page = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index></Index>}></Route>
                    <Route path="/Menu" element={<Menu></Menu>}></Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
};

export default Page;
