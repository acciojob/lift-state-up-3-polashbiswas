import React from "react";


const Childtwo = ({getoption}) => {

    function handelBtnTwo(value){
        getoption(value);
    }

    return(
        <div className="childTwo">
            <h2>Child Component 2</h2>
            <button onClick={()=> handelBtnTwo("Option 2")}>Option 2</button>
        </div>
    )
}

export default Childtwo;