import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
type AccordionPropsTitle = {
    title: string,
    toggle:(collapsed:boolean)=>void
}



function AccordionTitle(props: AccordionPropsTitle) {
    return (
        <div>
            <h3 onClick={()=>{props.toggle(true)}}>{props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <ol>1</ol>
                <ol>2</ol>
                <ol>3</ol>
                <ol>4</ol>
            </ul>
        </div>
    );
}

export function UncontrolledAccrodion(props: AccordionPropsType) {
    let [collapsed,setCoolapsed] = useState<boolean>()
    const onClickHandler = () =>{
        collapsed ? setCoolapsed(false): setCoolapsed(true)
    }

    return (
        <div>
            <AccordionTitle toggle={onClickHandler} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}






