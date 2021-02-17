import React from 'react';

const SearchBar = ({searchTerm, handleSubmit, handleOnChange}) => {
    
    

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className='search'
                    placeholder='Search...'
                    type='text'
                    value={searchTerm}
                    onChange={handleOnChange}
                />
            </form>
        </header>
    )
}

export default SearchBar
