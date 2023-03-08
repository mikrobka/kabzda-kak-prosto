import React from "react";


type RatingPropsType = {
    value:0|1|2|3|4|5,
    changeRating:(value:0|1|2|3|4|5)=>void
}
type StarPropsType = {
    selected: boolean,
    changeRating:(value:0|1|2|3|4|5)=>void
    value:0|1|2|3|4|5
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star changeRating={props.changeRating} value={1} selected={props.value > 0}/>
            <Star changeRating={props.changeRating} value={2}selected={props.value > 1}/>
            <Star changeRating={props.changeRating} value={3}selected={props.value > 2}/>
            <Star changeRating={props.changeRating} value={4}selected={props.value > 3}/>
            <Star changeRating={props.changeRating} value={5}selected={props.value > 4}/>
        </div>
    )
}



function Star(props: StarPropsType) {
    return <span onClick={()=>{props.changeRating(props.value)}} >{props.selected ? <b>Star</b> : "Star"}</span>
}


