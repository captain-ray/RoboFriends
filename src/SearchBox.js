import React from 'react';

const SearchBox = ({ searchText, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robot..."
                onChange={searchChange}
                value={searchText} />
        </div>
    )
}


export default SearchBox;