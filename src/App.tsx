import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Button} from "./components/Button/Button";
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccrodion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {ControlledOnOff} from "./OnOff/ControlledOnOff";


function App() {
    const [rating,setRating] = useState<0|1|2|3|4|5>(1)
    const [collapsed,setCollapsed] = useState(true)
    const [onOff,setOnOff] = useState(true)
    const changeRating = (value:0|1|2|3|4|5) => {
        setRating(value)
    }
    const changeCollapsed = (collapsed:boolean) => {
        setCollapsed(collapsed)
    }

    const changeOnOff = (onOff:boolean) => {
        setOnOff(onOff)
    }

    return (
    <div>
        {/*<PageTitle title={"This is APP component"}/>*/}
        {/*<PageTitle title={"News"}/>*/}

        {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
        {/*<Rating value = {1}/>*/}
        {/*<Rating value = {2}/>*/}
        {/*<Rating value = {3}/>*/}
        {/*<Rating value = {4}/>*/}
        {/*<Rating value = {5}/>*/}
        {/*<Button active={false}/>*/}
        {/*<OnOff/>*/}
        {/*<UncontrolledAccrodion titleValue={'Menu'}/>*/}
        {/*<UncontrolledRating/>*/}
        <Rating changeRating={changeRating} value={rating}/>
        <Accordion changeCollapsed={changeCollapsed} titleValue={"Menu"} collapsed={collapsed}/>
        <ControlledOnOff onOff={onOff} changeOnOff={changeOnOff}/>
    </div>

  );
}

type PagePropsTitle = {
    title: string,
}
function PageTitle(props:PagePropsTitle){
    return <h1>{props.title}</h1>
}

export default App;

