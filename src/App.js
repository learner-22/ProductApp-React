
import './App.css';
import productsData from './data/productsData'

//Import component from react library using desructuring
import {Component} from "react"

import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
// Prior to hooks we had to use state component only in class components.
//Function components did not have states. We have the example of function component below
class App extends Component {
 //Key value pair of data that we need to display
  state ={
    productsData : productsData,
    productName : '',
    productPrice : 0,
    productDescription :''
  }

  handleChange = (event) => {
    console.log(event)
  this.setState({[event.target.id] : event.target.value})
  }

  handleSubmit =(event) =>{
    event.preventDefault()
    const newProduct = {
      name : this.state.productName,
      price : this.state.productPrice,
      description : this.state.productDescription
    }
    console.log(newProduct)
    this.setState({
      productsData : [newProduct, ...this.state.productsData],
      productName : '',
      productPrice : 0,
      productDescription :''
    }) 
  }
  render(){
    return (
      <div className="App">
        <Navbar />
<form onSubmit = {this.handleSubmit}>
 <label htmlFor = "productName"> Product Name  </label>
 <input type = "text" value = {this.state.productName} onChange ={this.handleChange} id="productName"/>
 <br />
 <label htmlFor='productPrice'> Product Price </label>
 <input type= "number" value ={this.state.productPrice} onChange ={this.handleChange} id="productPrice"/>
 <br />
 <label htmlFor='productDescription'> Product Description</label>
 <input type= "text" value ={this.state.productDescription} onChange ={this.handleChange} id="productDescription"/>
 <br />
 <input type="submit" />

        </form>
        <ProductsList products ={this.state.productsData} />
      </div>
    )
  }
}

export default App;

// function App() {
//   console.log (productsData)
//   return (
//     <div className="App">
//       <Navbar />
//       <ProductsList products ={productsData} />
//     </div>
//   )
// }