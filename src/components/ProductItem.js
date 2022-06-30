
// Using Destructuring of Objects
const ProductItem = (props) =>{
    const{ name, price, description} = props.product
    return(
        <div>
        <h3>Name : {name} </h3>
        <h4>Price: ${price} </h4>
        <p>Description: {description} </p>
        <br></br>
        </div>
    )
}


// const ProductItem = (props) =>{
//     return(
//         <div>
//         <h3>Name : {props.product.name} </h3>
//         <h4>Price: ${props.product.price} </h4>
//         <p>Description: {props.product.description} </p>
//         <br></br>
//         </div>
//     )
// }

export default ProductItem 