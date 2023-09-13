import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        {
            id: 1,
            name: "Nike",
            price: 699.99,
            stock: 40,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes1.jpg",
            discountRate: 0.1,
            rate: 5,
            totalRate:250
          },
          {
            id: 2,
            name: "Nike",
            price: 899.99,
            stock: 80,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes2.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:190
          },
          {
            id: 3,
            name: "Nike",
            price: 499.99,
            stock: 60,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes3.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:170
          },
          {
            id: 4,
            name: "Nike",
            price: 999.99,
            stock: 10,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes4.jpg",
            discountRate: 0.1,
            rate: 2,
            totalRate:55
          },
          {
            id: 5,
            name: "Nike",
            price: 399.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes5.jpg",
            discountRate: 0.1,
            rate: 3,
            totalRate:83
          },
          {
            id: 6,
            name: "Nike",
            price: 599.99,
            stock: 50,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes6.jpg",
            discountRate: 0.1,
            rate: 5,
            totalRate:320
          },
          {
            id: 7,
            name: "Nike",
            price: 1100.99,
            stock: 20,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes7.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:156
          },
          {
            id: 8,
            name: "Nike",
            price: 899.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes8.jpg",
            discountRate: 0.1,
            rate: 2,
            totalRate:35
          },
          {
            id: 9,
            name: "Nike",
            price: 699.99,
            stock: 40,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes1.jpg",
            discountRate: 0.1,
            rate: 5,
            totalRate:250
          },
          {
            id: 10,
            name: "Nike",
            price: 899.99,
            stock: 80,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes2.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:190
          },
          {
            id: 11,
            name: "Nike",
            price: 499.99,
            stock: 60,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes3.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:170
          },
          {
            id: 12,
            name: "Nike",
            price: 999.99,
            stock: 10,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes4.jpg",
            discountRate: 0.1,
            rate: 2,
            totalRate:55
          },
          {
            id: 13,
            name: "Nike",
            price: 399.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes5.jpg",
            discountRate: 0.1,
            rate: 3,
            totalRate:83
          },
          {
            id: 14,
            name: "Nike",
            price: 599.99,
            stock: 50,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes6.jpg",
            discountRate: 0.1,
            rate: 5,
            totalRate:320
          },
          {
            id: 15,
            name: "Nike",
            price: 1100.99,
            stock: 20,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes7.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:156
          },
          {
            id: 16,
            name: "Nike",
            price: 899.99,
            stock: 30,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes8.jpg",
            discountRate: 0.1,
            rate: 2,
            totalRate:35
          },
          {
            id: 17,
            name: "Nike",
            price: 699.99,
            stock: 40,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes1.jpg",
            discountRate: 0.1,
            rate: 5,
            totalRate:250
          },
          {
            id: 18,
            name: "Nike",
            price: 899.99,
            stock: 80,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes2.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:190
          },
          {
            id: 19,
            name: "Nike",
            price: 499.99,
            stock: 60,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes3.jpg",
            discountRate: 0.1,
            rate: 4,
            totalRate:170
          },
          {
            id: 20,
            name: "Nike",
            price: 999.99,
            stock: 10,
            sizes: ["40", "41", "42", "43"],
            image: "/shoes4.jpg",
            discountRate: 0.1,
            rate: 2,
            totalRate:55
          }
    ],

    currentPage: 1,
    productsPerPage: 8, 
    size:'',
    basketData:[],
    paymentData:[],
    dataForm:[]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
      changePage:(state,action) => {
        state.currentPage = action.payload
      },
      selectSize:(state,action) => {
        state.size = action.payload
      },
      addBasket:(state,action) => {
        state.basketData = [...state.basketData,action.payload]
      },
      deleteBasket:(state,action) => {
        state.basketData = state.basketData.filter(item => (
          item.id !== action.payload
        ))
      },
      basketReset:(state) => {
        state.basketData = []
      },
      addPaymentData:(state,action) => {
        state.paymentData = [action.payload]
      },
      formDataChange:(state,action) => {
        state.dataForm = action.payload
      }

    }
})

export default dataSlice.reducer
export const  {changePage,selectSize,addBasket,deleteBasket,basketReset,addPaymentData,formDataChange} = dataSlice.actions