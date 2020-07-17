import React from 'react';

const NumberList = ({numbers}) => {
    const numbersElems = numbers.map(num => (<li>{num}</li>));

    return <ul>{numbersElems}</ul>;
};

export default NumberList;