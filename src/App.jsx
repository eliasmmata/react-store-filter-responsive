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
        <div className="filter-container">
          {searchProduct !== "" ?
            products.filter((product) => {
              if (searchProduct === "") {
                return null
              } else if (product.name.toLowerCase().includes(searchProduct.toLowerCase())) {
                console.log(product.name)
                console.log(searchProduct)
                return product
              } else {
                console.log(('no hay resultados'));
              }

            }).map((product, key) => {
              return (
                <div key={product.id} className="product-card-filtered">
                  <div>
                    <img src={product.image} alt={product.name} />
                    <p className="product-card__title">{product.name}</p>
                  </div>
                  <div className="product-card-price-container">
                    <p className={!product.sales ? "product-card__price" : "product-card__price--line"}>
                      {product.price.toString().replace(/\./g, ',')} €
                    </p>
                    {product.sales &&
                      <p className="product-card__sales">
                        {(product.price - (product.price * product.sales)).toFixed(2).toString().replace(/\./g, ',')}
                        (-{(product.sales * 100)}%)
                      </p>
                    }
                  </div>
                  {product.colors.length > 1 ?
                    <>
                      <p className="product-card__colors">más colores</p>
                      <ul className="product-card__palette">{product.colors.map((color, i) => {
                        return (
                          <li key={JSON.stringify(i)}
                            style={color === 'white'
                              ? { color: 'white', textShadow: '-1px -1px 1px rgba(255, 255, 255, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.6)' }
                              : { color: color, textShadow: '-1px -1px 1px rgba(255, 255, 255, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.1)' }} >
                            <span style={{ backgroundColor: color }}></span>
                            {color
                              .replace(/white/g, 'blanco')
                              .replace(/black/g, 'negro')
                              .replace(/blue/g, 'azul')
                              .replace(/green/g, 'verde')
                              .replace(/red/g, 'rojo')
                            }
                          </li>
                        )
                      })}
                      </ul>
                    </>
                    : <p className="product-card__colors">
                      Sólo disponible en {product.colors[0].replace(/white/g, 'blanco')

                      }
                    </p>
                  }
                  <ButtonMain />
                </div>
              );
            })
            : null
          }
        </div>
        <Products />
      </div>
    </div>
  );
}

export default App;
