import React, { Component } from 'react';

import { connect } from 'react-redux'; // importing only one function from reract-redux

class BookList extends Component { // NOTE: dont need export default
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){ // state contains List of books and Actie book  NOTE:on every state change(we loaded data from remote server) all container will be rerendered
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);