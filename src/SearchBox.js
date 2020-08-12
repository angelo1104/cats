import React from "react";
import "./SearchBox.css";

class SearchBox extends React.Component{
    render(){
        return(
            <div className="pa2">
                <input 
                 className="search pa3 ba b--green bg-lightest-blue"
                 type="search"
                 placeholder="Search for Cats" 
                 onChange={this.props.searchChange}    
                 />
            </div>
        );
    }
} 

export default SearchBox;