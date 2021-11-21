import React, { Component } from "react";
import "./bday-element-add-form.css"; 

export default class BdayElementAddForm extends Component {

    state = {
        name: "",
        surname: "",
        fullDate: ""
    }




    onNameChange = (event) => {
        this.setState({
            [event.target.name]: this
                .toFormalise(event.target.value)
                .replace(/[^aA-zZ]/g,'')
        })

        console.log([event.target.value])
    }

    onDateChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log([event.target.value])
    }

    toSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.surname, this.state.fullDate);
        this.setState({
            name: "",
            surname: "",
            fullDate: ""
        })
    }

    toFormalise (name) {
        return name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : name;
    }

    render(){
        const {name, surname, fullDate} = this.state;
        return (
            <form className="bottom-panel d-flex"
                  onSubmit = {this.toSubmit}>
  
                <input
                    type="text"
                    placeholder="name"
                    className="form-control add-name"
                    name = "name"
                    value = {name}
                    onChange = {this.onNameChange}/>
                <input
                    type="text"
                    placeholder="surname"
                    className="form-control add-surname"
                    name = "surname"
                    value = {surname}
                    onChange = {this.onNameChange}/>
                <input
                    type="date"
                    className="form-control add-date"
                    name = "fullDate"
                    value = {fullDate} 
                    onChange = {this.onDateChange}/>     
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Add 
                </button>
            </form>
        )
    };
};



