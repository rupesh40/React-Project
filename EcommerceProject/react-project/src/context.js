import React, { Component } from 'react'
import{storeProducts,detailProduct} from './data'

const ProductContext = React.createContext();
//provider
//consumer


 class ProductProvider extends Component {
     state={
         products:[],
         detailProduct:detailProduct
     }

     componentDidMount(){
         this.setProducts();
     }
     setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach( item => {
            const singleItem ={...item };
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
    })}

    getItem = id =>{
        const product1 = this.state.products.find(item => item.id === id);
        return product1
    }
     handleDetail =(id) =>{
         const product1= this.getItem(id);
         this.setState({detailProduct:product1}
         )
     }
     addToCart =(id) =>{
        console.log(`hello from addToCart ${id}`);
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