import React, { Component } from 'react'
import{storeProducts,deatailProduct} from './data'

const ProductContext = React.createContext();
//provider
//consumer


 class ProductProvider extends Component {
     state={
         products:storeProducts,
         deatailProduct:deatailProduct
     }
     handleDetail =() =>{
         console.log("hello from detail")
     }
     addToCart =() =>{
        console.log("hello from addToCart")
     }

    render() {
        return (
        //    <ProductContext.Provider value="hello from context">
        <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
        }}>
           {this.props.children}
           </ProductContext.Provider>
            )
    }
}

const ProductConsumer =ProductContext.Consumer;

export {ProductProvider,ProductConsumer};