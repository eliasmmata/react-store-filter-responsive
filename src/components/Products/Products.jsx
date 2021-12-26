import React, { useState } from "react";
import ButtonMain from "../Button/Button";
import './Products.scss';
import { products } from "../../data";

// lo he pasado como archivo externo (JSON de productos en data.js)

/* export const products = [
    {
        "id": 1,
        "name": "Polo manga larga estampado amarillo",
        "price": 18.99,
        "sales": 15.19,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo--ecofriends-manga-larga-estampado-nino_id_11-04158-097-M-4.JPG?v=20210720044159"
    },
    {
        "id": 2,
        "name": "Polo manga larga bandas",
        "price": 20.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-bandas-nino_id_11-55120-700-M-4.JPG?v=20210729043620"
    },
    {
        "id": 3,
        "name": "Polo manga larga estampado blanco",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-ecofriends-estampado-manga-larga-bebe-nino_id_11-02142-013-M-4.JPG?v=20210831093313"
    },
    {
        "id": 4,
        "name": "Polo manga larga miniestampado blanco",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-manga-larga-contrastes-chico_id_11-07145-073-M-4.JPG?v=20210921061532"
    },
    {
        "id": 5,
        "name": "Polo manga larga estampado rojo",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "red": "red"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-ecofriends-manga-larga-bebe-nino_id_11-02139-950-M-4.JPG?v=20210428111531"
    },
    {
        "id": 6,
        "name": "Polo manga larga estrella",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-ecofriends-manga-larga-skate-nino_id_11-04155-071-M-4.JPG?v=20210630052817"
    },
    {
        "id": 7,
        "name": "Polo manga larga verde",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "green": "green"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-manga-larga-print-nino_id_11-04159-030-M-4.JPG?v=20210827045329"
    },
    {
        "id": 8,
        "name": "Polo manga larga granate",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "red": "red"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-ecofriends-manga-larga-skate-nino_id_11-04155-072-M-4.JPG?v=20210630052817"
    },
    {
        "id": 9,
        "name": "Polo manga larga rayas",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-manga-larga-raya-bloque-nino_id_11-04156-088-M-4.JPG?v=20210730111904"
    },
    {
        "id": 10,
        "name": "Polo manga larga cuadros",
        "price": 18.99,
        "sales": null,
        "type": "Polo",
        "colors": {
            "black": "black",
            "white": "white",
            "blue": "blue"
        },
        "image": "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/polo-desagujado-blocking-nino_id_11-55119-700-M-4.JPG?v=20210921062305"
    }
] */


const Products = () => {

    const [isActive, setActive] = useState("false");
    const changeColumns = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className="change-columns-container">
                <i className="pi pi-th-large" onClick={changeColumns} style={{ 'fontSize': '2em' }}></i>
                <p className="text-columns" onClick={changeColumns}> ( Pulsar para cambiar vista columnas )</p>
            </div>
            <h1 style={{margin:'0', color: 'black'}}>Polos ({products.length})</h1>
            <div className={isActive ? "product-card-container" : "product-card-container-two"}>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={isActive ? "product-card" : "product-card-two"}>
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
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Products;