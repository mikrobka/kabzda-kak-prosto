import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {

    return (
    <div>
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"News"}/>
        <Rating value = {2}/>
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        <Rating value = {3}/>

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

