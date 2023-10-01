const { createSlice } = require("@reduxjs/toolkit");

const ProductSlice=createSlice({
     name:"products",
     initialState:{
        data:[],
        isLoading:false,
        WishList:[0], 
     },
     reducers:{
        addProducts(state,action){
            state.data.push(action.payload)
        },
        addItemtoWishlist(state,action){
         let tempData=state.WishList
         tempData.push(action.payload)
         state.WishList=tempData;

      },
        addItemtoCart(state,action){
         let temData=state.data;
         let isItemExist=false;
         temData.map(item=>{
            if(item.id==action.payload.id){
               isItemExist=true;
            }
         })
        }

     }
})

export const{addProducts,addItemtoWishlist}=ProductSlice.actions;

export default ProductSlice.reducer