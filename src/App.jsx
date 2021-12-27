import React, { useState, useEffect } from "react";
import './App.scss';
import ButtonMain from "./components/Button/Button";
import Preloader from "./components/Preloader/Preloader";
import Products from './components/Products/Products';
import { products } from "./data";

function App() {

  // inicio
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  // filtro producto
  const [searchProduct, setSearchProduct] = useState('');

  // resetear Input
  const resetInputField = () => {
    setSearchProduct("");
  };

  return (
    <>

      {loading ? <Preloader />
        :
        <div className="animate__animated animate__fadeIn animate__slow">
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
                  value={searchProduct}
                  onChange={event => {
                    setSearchProduct(event.target.value);
                  }}
                />
                <i className="pi pi-backward" onClick={resetInputField}></i>
              </span>
            </div>

            <div className="filter-container">
              {searchProduct !== "" ?
                products.filter((product, i) => {
                  var results = product.name.split(" ");
                  console.log(searchProduct);
                  if (searchProduct === "") {
                    return null
                  } else if (product.name.toLowerCase().includes(searchProduct.toLowerCase()) || results.some(v => searchProduct.includes(v))) {
                    return product;
                  } else {
                    console.log("sin resultados");
                  }
                }).map((product, key) => {
                  return (
                    <>
                      <div key={key} className="product-card-filtered">
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
                            <ul className="product-card__palette">{product.colors.map((color, key) => {
                              return (
                                <li key={key}
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
                    </>
                  );
                })
                : null
              }
            </div>
            {searchProduct === "" ?
              <Products />
              : null}
          </div>
        </div>
      }
    </>
  );
}

export default App;
