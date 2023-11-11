import React, { createContext, useState, useEffect, ReactNode } from "react";
import Data from "../Data";

interface ProductContext {
    id: number;
    title: string;
    price: number;
    image?: any;
    category: string;
    quantity: number
    }

interface DataContextValue {
    products: ProductContext[];
    menu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    cart: [ProductContext[], React.Dispatch<React.SetStateAction<ProductContext[]>>];
    addToCart: (id: number) => void;
    total: [number, React.Dispatch<React.SetStateAction<number>>];
}

export const DataContext = createContext<DataContextValue>({
    products: [],
    menu: [false, () => {}],
    cart: [[], () => {}],
    addToCart: (id: number) => {},
    total: [0, () => {}],
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductContext[]>([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState<ProductContext[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const productData = Data.items;
        if (productData) {
            setProducts(productData);
        } else {
            setProducts([]);
        }
    }, []);

    const addToCart = (id: number) => {
        const check = cart.every((item) => {
            return item.id !== id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product.id === id;
            });
            setCart([...cart, ...data]);
        }
    };

    useEffect(() => {
        const cartData = JSON.parse(
            localStorage.getItem("cartData") || "[]"
        );
        if (cartData) {
            setCart(cartData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cart));
    }, [cart]);

	useEffect(() =>{
		const getTotal = () =>{
			const res = cart.reduce((prev, item) =>{
				return prev + (item.price * item.quantity)
			},0)
			setTotal(res)
		}
		getTotal()
	},[cart])

    const value: DataContextValue = {
        products,
        menu: [menu, setMenu],
        cart: [cart, setCart],
        addToCart,
        total: [total, setTotal],
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
