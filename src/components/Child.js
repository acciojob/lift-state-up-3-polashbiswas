import React from "react";


const Child = ({getoption}) => {

    let handelBtn = (e) =>{
        getoption(e.target.name);
    }

    return(
        <div className="childOne">
            <h2>Child Component 1</h2>
            <button name="Option 1" onClick={handelBtn}>Option 1</button>
        </div>
    )
}

export default Child;