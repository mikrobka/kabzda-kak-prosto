import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
}


export function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    }
    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        );
    }

}

type AccordionPropsTitle = {
    title: string,
}

function AccordionTitle(props: AccordionPropsTitle) {
    return (
        <div>
            <h3>{props.title}</h3>
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