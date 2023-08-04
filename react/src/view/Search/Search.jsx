import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

Search.propTypes = {
    onSubmit: PropTypes.func,
};

Search.defaultProps={
    onSubmit: null
}

function Search(props) {
    const {onSubmit} = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null);
    const negative = useNavigate()

    function handleSearchTermChange(e){
        
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
        };

        typingTimeoutRef.current = setTimeout(() => {
        const formValues = {
            searchTerm: value,
        };
        onSubmit(formValues);
        negative('/products/women')
        }, 400); 
    }

    return (
        <form onSubmit={handleSearchTermChange}>
            <input 
                type="text" 
                value={searchTerm}
                onChange={handleSearchTermChange}
                placeholder='Search'
                />
        </form>
    );
}

export default Search;