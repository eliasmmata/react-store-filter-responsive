import React, {useState} from "react";
import ButtonMain from "../Button/Button";
import './Products.scss';

const Products = () => {
    const [isActive, setActive] = useState("false");
    const changeColumns = () => {
      setActive(!isActive);  
    };

    return (
        <>
            <div className="change-columns-container">
                <i className="pi pi-th-large" onClick={changeColumns} style={{'fontSize': '2em'}}></i>
                <p className="text-columns" onClick={changeColumns}> ( Pulsar para cambiar vista columnas )</p>
            </div>
            <div className={isActive ? "product-card-container" : "product-card-container-two"}>
                <div className={isActive ? "product-card" : "product-card-two"}>
                    <img src={'/images/polo-manga-larga-1.png'} alt="polo" />
                    <p className="product-card__title">Polo manga larga estampado bebé niño</p>
                    <p className="product-card__price">18,99 €</p>
                    <p className="product-card__sales">15,19 € (-20%)</p>
                    <ButtonMain />
                </div>
                <div className={isActive ? "product-card" : "product-card-two"}>
                    <img src={'/images/polo-manga-larga-2.png'} alt="polo" />
                    <p className="product-card__title">Polo manga larga estampado bebé niño</p>
                    <p className="product-card__price">18,99 €</p>
                    <p className="product-card__sales">15,19 € (-20%)</p>
                    <ButtonMain />
                </div>
                <div className={isActive ? "product-card" : "product-card-two"}>
                    <img src={'/images/polo-manga-larga-1.png'} alt="polo" />
                    <p className="product-card__title">Polo manga larga estampado bebé niño</p>
                    <p className="product-card__price">18,99 €</p>
                    <p className="product-card__sales">15,19 € (-20%)</p>
                    <ButtonMain />
                </div>
                <div className={isActive ? "product-card" : "product-card-two"}>
                    <img src={'/images/polo-manga-larga-2.png'} alt="polo" />
                    <p className="product-card__title">Polo manga larga estampado bebé niño</p>
                    <p className="product-card__price">18,99 €</p>
                    <p className="product-card__sales">15,19 € (-20%)</p>
                    <ButtonMain />
                </div>
            </div>
        </>
    )
}

export default Products;