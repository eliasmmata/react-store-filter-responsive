import React, { useState } from "react";
import ButtonMain from "../Button/Button";
import './Product.scss';
import { products } from "../../data";

const Product = () => {

    return (
        <>
            <div className="product-card-container">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product-card">
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
                                                    : { color: color , textShadow: '-1px -1px 1px rgba(255, 255, 255, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.1)'  }} >
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
                            <p>SOY DEL FILTRO EN COMPONENTE</p>
                        </div>
                        
                    );
                })}
            </div>
        </>
    )
}


export default Product;