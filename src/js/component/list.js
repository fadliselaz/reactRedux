import React from 'react';
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {articles: state.articles}
}

const connectedList = ({articles}) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>
            {el.title}
            </li>
        ))}
    </ul>
)
const List = connect(mapStateToProps)(connectedList)
export default List