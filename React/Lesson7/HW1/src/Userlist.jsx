import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
    state = {
    currentPage: 0,
    itemsPerPage: 3
}

    goNext = () => {
    this.setState({
        currentPage: this.state.currentPage + 1
    })
}
    goPrev = () => {
    this.setState({
        currentPage: this.state.currentPage - 1
    })   
}

    render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const usersToDisplay = users.slice(start, end);

    return (
        <div>
        <Pagination
            goNext={this.goNext}
            goPrev={this.goPrev}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={users.length}
        />
        <ul className="users">
            {usersToDisplay.map(user => (
            <User name={user.name} age={user.age} />
            ))
            }
        </ul>
        </div >
    )
    }
}

export default UsersList;