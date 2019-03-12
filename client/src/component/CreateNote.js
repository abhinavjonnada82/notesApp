import React, { Component } from 'react';
import Axios from 'axios';


export default class CreateNote extends Component {

    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            name: '',
            priority: '',
        }
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Priority: ${this.state.priority}`);

        const newNote = {
            description: this.state.description,
            name: this.state.name,
            priority: this.state.priority
        }
        // Mongo 
        Axios.post('/notes/add', newNote)
            .then(res => console.log(res.data))
        
            // Firebase
        Axios.post('/notes/addfb', newNote)
            .then(res => console.log(res.data))
        
            this.setState({
                description: '',
                name: '',
                priority: ''
            })

    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Create Note</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Name: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.onChangeName}
                            />
                </div>
                <div className="form-group">

                <label className="form-check-label">Priority: </label>
                <br />
                    <div className="form-check form-check-inline">
                     
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.priority==='Low'} 
                                onChange={this.onChangePriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={this.state.priority==='Medium'} 
                                onChange={this.onChangePriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={this.state.priority==='High'} 
                                onChange={this.onChangePriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>

                <div className="form-group">
                    <input  type="submit" className="btn btn-primary btn" value="Create Note"  />
                </div>
            </form>
        </div>
        )
    }
}