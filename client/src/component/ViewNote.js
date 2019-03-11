import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.name}</td>
        <td>{props.todo.priority}</td>
    </tr>
)


export default class ViewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {notes: []}
    }

    noteList() {
        return this.state.notes.map(function(currentNote, i){
            return <Todo todo={currentNote} key={i} />;
        })
    }

    render() {
        return (
            <div>
            <h3>View Notes</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    { this.noteList() }
                </tbody>
            </table>
        </div>
        )
    }
}