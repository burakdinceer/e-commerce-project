import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        {
            id: 1,
            name: "Nike",
            price: 699.99,
            stock: 40,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes1.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 2,
            name: "Nike",
            price: 899.99,
            stock: 80,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes2.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 3,
            name: "Nike",
            price: 499.99,
            stock: 60,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes3.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 4,
            name: "Nike",
            price: 999.99,
            stock: 10,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes4.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 5,
            name: "Nike",
            price: 399.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes5.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 6,
            name: "Nike",
            price: 599.99,
            stock: 50,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes6.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 7,
            name: "Nike",
            price: 1100.99,
            stock: 20,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes7.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
          {
            id: 8,
            name: "Nike",
            price: 899.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/public/shoes8.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:55
          },
    ]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{}
})

export default dataSlice.reducer