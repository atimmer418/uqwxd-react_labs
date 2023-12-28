import React from 'react'
import {useSelector} from 'react-redux'

const DivPanel = () => {
    let counterVal = useSelector(state => state.counter);
    return (
        <div>
            {counterVal} This is how many times you've pressed the counter
        </div>
    );
}

export default DivPanel;