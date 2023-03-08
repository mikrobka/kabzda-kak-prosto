import React, {useState} from "react";

type ControlledOnOffType = {
    onOff:boolean
    changeOnOff:(onOff:boolean)=>void
}



export const ControlledOnOff = (props:ControlledOnOffType) => {
    const onStyle ={
        width: "60px",
        height: "60px",
        border: "1px solid black",
        display:"inline-block",
        padding:"2px",
        backgroundColor: props.onOff  ? "green" : "white"
    }
    const offStyle ={
        width: "60px",
        height: "60px",
        border: "1px solid black",
        display:"inline-block",
        padding:"2px",
        marginLeft:"10px",
        backgroundColor: props.onOff  ? "white" : "red"
    }
    const indicatorStyle ={
        width:"30px",
        height:"30px",
        borderRadius:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft: "5px",
        backgroundColor: props.onOff  ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() =>props.changeOnOff(true)}>On</div>
            <div style={offStyle} onClick={() =>props.changeOnOff(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

