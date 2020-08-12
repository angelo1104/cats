import React from "react";


let style = {
    overflowY:"scroll",
    height: 800,
    margin:"auto 5%",
    overflow:"overlay",
}

const Scroll = (props)=>{
    return(
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Scroll;