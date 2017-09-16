import React, { Component } from 'react';

import { connect } from 'react-redux'; // importing only one function from reract-redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component { // NOTE: dont need export default
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                        {book.title}
                    </li>
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


function mapStateToProps(state) { // state contains List of books and Actie book  NOTE:on every state change(we loaded data from remote server) all container will be rerendered
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

//anything returned from this func  will end up as props on BookList container so we can call it inside of a container 
//as this.props.selectBook
//TODO: draw all flow or find good picture and print
function mapDispatchToProps(dispatch){
    //Whanever selectBook is called, the result shold be passed through all reducers
    // dispatch receves function and passes it throug all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

