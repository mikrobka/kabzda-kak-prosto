import React from "react";
import './Button.css'
type PropsButton = {
    active:boolean
}

export const Button = (props:PropsButton) => {
    let colorChanged = 'red-button'
    const changeColorHandler = () => {
        if(props.active === false){
            colorChanged = 'red-button'
        }else{
            colorChanged = 'green-button'
        }
    }

    return(
        <div className={'conteiner'}>
            <button onClick={changeColorHandler} className={colorChanged}><h3>1</h3></button>
            <button onClick={changeColorHandler} className={colorChanged}><h3>2</h3></button>
            <button onClick={changeColorHandler} className={colorChanged}>circle</button>
        </div>
    );



}