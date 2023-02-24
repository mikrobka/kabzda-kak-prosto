import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Button} from "./components/Button/Button";
import {OnOff} from "./components/OnOff";


function App() {

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
        <OnOff/>
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

