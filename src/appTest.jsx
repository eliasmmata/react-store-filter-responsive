import React, { useState } from "react";
import './App.scss';
import ButtonMain from "./components/Button/Button";
import Product from './components/Product/Product';
import Products from './components/Products/Products';
import { products } from "./data";

function App() {

  const [searchProduct, setSearchProduct] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/images/logo-name.png'} alt="polo" />
        <h6>Hace amigos</h6>
      </header>
      <div>
        <div className='symbol-container'>
          <i className="pi pi-minus" style={{ 'fontSize': '1em' }}></i>
          <i className="pi pi-plus" style={{ 'fontSize': '1em' }}></i>
        </div>
        <div className='input-container'>
          <span className="p-input-icon-left">
            <i className="pi pi-search"></i>
            <input
              type="text"
              placeholder="Buscar"
              className="p-inputtext p-component"
              onChange={event => {
                setSearchProduct(event.target.value);
              }}
            />
          </span>
        </div>

        

        {searchProduct !== "" ?
          products.filter((product) => {
            if (searchProduct === "") {
              return null
            } else if (product.name.toLowerCase().includes(searchProduct.toLowerCase())) {
              let wordsInString = product.name.split(" ");
              console.log(typeof wordsInString)
              console.log(wordsInString)
              
              for (let i = 0; i < wordsInString.length; i++) {
                let word = wordsInString[i]
                if(searchProduct.match('/' + /granate/ + '/g'))  {
                  return product;
                }
                // console.log(typeof word)
            }
              return product;
            } else {
              console.log(('no hay resultados'));
            }

          }).map((product, key) => {
            return (
              <Product key={key} />
            );
          })
          :
          <Products/>
        }
      </div>
    </div>
  );
}

export default App;
