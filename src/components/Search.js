import React from "react";


const Search = ({ onSearch, search }) => {
    return (
        <div className="search-field">
            <div className="search-item">
                <input type="text" className="product-search" placeholder="Search..." value={search} onChange={(e) => onSearch(e.target.value)} />
            </div>
            <input type="checkbox" />
            <label>Only Show products in stock.</label>
        </div>
    )
}
export default Search;