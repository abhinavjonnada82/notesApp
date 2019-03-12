import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.name}</td>
        <td>{props.todo.priority}</td>
        <td>{props.todo.date}</td>
    </tr>
)


export default class ViewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {notes: []}
    }

    componentDidMount() {
        Axios.get('/notes')
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(function (error) {
                console.log(error)
            })
        // Axios.get('/notes/fb')
        //     .then(response => {
        //         this.setState({ notes: response.data })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }
    noteList() {
        return this.state.notes.map(function(currentNote, i){
            return <Todo todo={currentNote} key={i} />;
        })
    }

    
    noteListfb() {
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
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { this.noteList() }
                </tbody>
            </table>

            {/* <h3>View Notes from FireBase</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { this.noteListfb() }
                </tbody>
            </table> */}
        </div>
        )
    }
}