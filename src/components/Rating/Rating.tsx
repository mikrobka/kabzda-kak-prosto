import React from "react";


type RatingPropsType = {
    value: number,
}

export function Rating(props: RatingPropsType) {
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

}
type StarPropsType = {
    selected: boolean,
}
function Star(props:StarPropsType) {

    if (props.selected === true) {
        return <span><b>Star</b></span>
    } else {
        return <span>Star</span>
    }
}


