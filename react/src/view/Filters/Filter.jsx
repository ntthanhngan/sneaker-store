import React from 'react';
import './Filter.scss'

function Filter() {
    return (
        <>
            <select name="filters" id="filter">
                <option value='newest'>Newest</option>
                <option value='oldest'>Oldest</option>
                <option value='desc'>Descending price</option>
                <option value='asc'>Ascending price</option>
            </select>
        </>
    );
}

export default Filter;