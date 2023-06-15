import React,{useState} from "react";
import Child from "./Child";
import Childtwo from "./Childtwo";

const Parent = () => {

    let [selectedOption, setSelectedOption] = useState("");

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child getoption={setSelectedOption}/>
            <Childtwo getoption={setSelectedOption}/>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}
export default Parent;