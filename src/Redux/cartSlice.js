import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
           const cartprod=action.payload
            const existItem= state.find((prod)=>prod.id===cartprod.id)
            if(existItem){
                existItem.qty+=1
                existItem.total=existItem.qty*existItem.price
            }
            else{                
                state.push({...cartprod,qty:1, total:1*cartprod.price})
            }
            
        },
        removeFromCart(state,action){
            const cartprod=action.payload
            const existItem=state.find((prod)=>prod.id===cartprod.id)
            if(existItem && existItem.qty>1){
                existItem.qty-=1
                existItem.total=existItem.qty*existItem.price

            }
            else{
                // console.log(state.filter((prod)=> {return prod}))
                    return state.filter((prod)=> prod.id !== cartprod.id)
            }

        },
        removeItem(state,action){
            return state.filter((prod)=>prod.id!==action.payload.id)
        }
    }
})
export const{addToCart,removeFromCart,removeItem}=cartSlice.actions
export default cartSlice.reducer
