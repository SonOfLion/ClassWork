import React, { Component } from 'react';
import UserList from'./Userlist';

//1.Devide component
//2. Make statik maket HTML
//3. devide for subtasks
//4. for each subtask make algo
//5. test each subtask & use debag all the time
//6. read documentation !!! (first step)

class App extends Component {
    render() {
        const users = [
            {
                id: 'id-0',
                age: 21,
                name: 'Bob',
            },
            {
                id: 'id-1',
                age: 17,
                name: 'Tom',
            },
            {
                id: 'id-2',
                age: 18,
                name: 'Tad',
            },
            {
                id: 'id-3',
                age: 45,
                name: 'Justin',
            },
            {
                id: 'id-4',
                age: 45,
                name: 'Franklin',
            },
            {
                id: 'id-5',
                age: 45,
                name: 'John',
            },
            {
                id: 'id-6',
                age: 45,
                name: 'Andrew',
            },
            {
                id: 'id-7',
                age: 45,
                name: 'Pol',
            },
            {
                id: 'id-8',
                age: 45,
                name: 'Ron',
            },
            {
                id: 'id-9',
                age: 45,
                name: 'Harry',
            },
            {
                id: 'id-10',
                age: 45,
                name: 'Anna',
            },
        ];
        return (
<UserList users={users}/>
        )
    }
}
export default App