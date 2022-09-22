import React from "react";
import './Button.scss'
export const Button = ({ className, onClick, textButton }) => (
    <button onClick={ () => onClick('Test') } className={className}>{textButton}</button>
);
