const data = {
    status: "success",
    items: [
        // Hamburgers (8 items)
        {
            id: 1,
            title: "Firecracker Burger",
            price: 50,
            category: "hamburguer",
            quantity: 1,
            image: require("../../Assets/Images/Hamburguer.png"),
        },
        {
            id: 2,
            title: "Classic Cheeseburger Combo",
            price: 55,
            category: "hamburguer",
            quantity: 1,
            image: require("../../Assets/Images/Hamburguer.png"),
        },
        {
            id: 3,
            title: "BBQ Bacon Burger",
            price: 60,
            category: "hamburguer",
            quantity: 1,
            image: require("../../Assets/Images/Hamburguer.png"),
        },
        {
            id: 4,
            title: "Double Deluxe Burger",
            price: 65,
            category: "hamburguer",
            quantity: 1,
            image: require("../../Assets/Images/Hamburguer.png"),
        },
        {
            id: 5,
            title: "Veggie Supreme Burger",
            price: 50,
            category: "hamburguer",
            quantity: 1,
            image: require("../../Assets/Images/Hamburguer.png"),
        },

        // Chicken (8 items)
        {
            id: 9,
            title: "Crispy Chicken Combo",
            price: 60,
            category: "chicken",
            quantity: 1,
            image: require("../../Assets/Images/RiedChicken.png"),
        },
        {
            id: 10,
            title: "Grilled Chicken Sandwich",
            price: 50,
            category: "chicken",
            quantity: 1,
            image: require("../../Assets/Images/RiedChicken.png"),
        },
        {
            id: 12,
            title: "Cajun Spiced Chicken Strips",
            price: 65,
            category: "chicken",
            quantity: 1,
            image: require("../../Assets/Images/RiedChicken.png"),
        },
        {
            id: 13,
            title: "Buffalo Chicken Tenders",
            price: 60,
            category: "chicken",
            quantity: 1,
            image: require("../../Assets/Images/RiedChicken.png"),
        },
        {
            id: 14,
            title: "Fried Chicken Platter",
            price: 70,
            category: "chicken",
            quantity: 1,
            image: require("../../Assets/Images/RiedChicken.png"),
        },

        // Tacos (8 items)
        {
            id: 17,
            title: "Taco Fiesta",
            price: 45,
            category: "tacos",
            quantity: 1,
            image: require("../../Assets/Images/Tacos.png"),
        },
        {
            id: 18,
            title: "Carnitas Street Tacos",
            price: 50,
            category: "tacos",
            quantity: 1,
            image: require("../../Assets/Images/Tacos.png"),
        },
        {
            id: 20,
            title: "Grilled Shrimp Tacos",
            price: 60,
            category: "tacos",
            quantity: 1,
            image: require("../../Assets/Images/Tacos.png"),
        },
        {
            id: 21,
            title: "Chicken Tinga Tacos",
            price: 50,
            category: "tacos",
            quantity: 1,
            image: require("../../Assets/Images/Tacos.png"),
        },
        {
            id: 22,
            title: "Vegetarian Black Bean Tacos",
            price: 45,
            category: "tacos",
            quantity: 1,
            image: require("../../Assets/Images/Tacos.png"),
        },


        // Hot Dogs (8 items)
        {
            id: 25,
            title: "Classic Hot Dog Meal",
            price: 35,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },
        {
            id: 26,
            title: "Chili Cheese Hot Dog",
            price: 40,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },
        {
            id: 28,
            title: "Chicago Style Hot Dog",
            price: 50,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },
        {
            id: 29,
            title: "Spicy Jalapeño Hot Dog",
            price: 40,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },
        {
            id: 30,
            title: "BBQ Pulled Pork Hot Dog",
            price: 45,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },
        {
            id: 31,
            title: "Korean Kimchi Hot Dog",
            price: 50,
            category: "hot dog",
            quantity: 1,
            image: require("../../Assets/Images/HotDog.png"),
        },

        // Burritos (8 items)
        {
            id: 33,
            title: "Burrito Bonanza",
            price: 55,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 34,
            title: "California Burrito",
            price: 60,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 35,
            title: "Shrimp and Avocado Burrito",
            price: 65,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 36,
            title: "BBQ Chicken Burrito",
            price: 55,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 37,
            title: "Veggie Fajita Burrito",
            price: 50,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 38,
            title: "Carne Asada Burrito",
            price: 60,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },
        {
            id: 39,
            title: "Spicy Chorizo Burrito",
            price: 65,
            category: "burritos",
            quantity: 1,
            image: require("../../Assets/Images/Burrito.png"),
        },

        // Pizzas (8 items)
        {
            id: 41,
            title: "Supreme Pizza Deal",
            price: 70,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 42,
            title: "Pepperoni Classic",
            price: 60,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 43,
            title: "Hawaiian Paradise",
            price: 65,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 44,
            title: "Meat Lovers Delight",
            price: 70,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 45,
            title: "Veggie Garden Feast",
            price: 55,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 46,
            title: "BBQ Chicken Ranch",
            price: 60,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
        {
            id: 47,
            title: "Margarita Fresca",
            price: 65,
            category: "pizza",
            quantity: 1,
            image: require("../../Assets/Images/Pizza.png"),
        },
    ],
};

export default data;