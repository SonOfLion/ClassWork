import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
    {
        name: "Tom",
        age: 16,
        id: 'id-0'
    },
    {
        name: "Bob",
        age: 33,
        id: 'id-1'
    },
    {
        name: "John",
        age: 22,
        id: 'id-2'
    },
    {
        name: "Hanna",
        age: 46,
        id: 'id-3'
    },
    {
        name: "Mary",
        age: 55,
        id: 'id-4'
    },
    {
        name: "Valentine",
        age: 67,
        id: 'id-5'
    },
    {
        name: "Maria",
        age: 35,
        id: 'id-6'
    },
    {
        name: "Joseph",
        age: 56,
        id: 'id-7'
    },
    {
        name: "Jane",
        age: 13,
        id: 'id-8'
    },
    
];

ReactDOM.render(<UsersList users={users}/>,rootElement);