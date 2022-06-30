import ProductItem from './ProductItem'

const ProductsList =(props) =>{
    //console.log('From productslist component',props.products)
    return(
        <div>
            <h2>Products</h2>
           {/* <h3>Name : { props.products[0].name}</h3> */}
        {/* Use an unique id. */}
           {
            props.products.map((item,idx) =>(
            <ProductItem product= {item} key = {idx} /> ))
           }
         
        </div>
    )
}

export default ProductsList