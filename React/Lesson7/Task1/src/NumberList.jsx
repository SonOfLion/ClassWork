import React from 'react';

const NumbersList = ({numbers}) => {
    const numbersElems = numbers.map(num => (<li>{num}</li>));

    return <ul>{numbersElems}</ul>;
};

export default NumbersList;