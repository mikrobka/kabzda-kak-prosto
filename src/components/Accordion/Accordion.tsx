import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: (collapsed: boolean) => void
}


export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle collapsed={props.collapsed} changeCollapsed={props.changeCollapsed} title={props.titleValue}/>
            {props.collapsed ?  <AccordionBody/> : ""}
        </div>
    );
}

type AccordionPropsTitle = {
    title: string,
    changeCollapsed: (collapsed: boolean) => void
    collapsed:boolean
}

function AccordionTitle(props: AccordionPropsTitle) {
    return (
        <div>
            <h3 onClick={() => {
                props.changeCollapsed(!props.collapsed)
            }}>{props.title}</h3>
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
    )

}