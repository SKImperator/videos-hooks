import React from "react";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    };
    
    return(
        <div className="search-bar ui segment">
               <form onSubmit={onSubmit} action="" className="ui form">
                   <div className="field">
                       <label htmlFor="">Video search</label>
                       <input type="text" value={term} onChange={onInputChange} />
                   </div>
               </form>
           </div>
    );
};

export default SearchBar;