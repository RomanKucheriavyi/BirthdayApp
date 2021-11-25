import React, { Component } from "react";
import "./bday-element-add-form.css"; 


export default class BdayElementAddForm extends Component {

    state = {
        name: "",
        surname: "",
        fullDate: "", 
        formErrors: {
            name:"",
            surname:"",
        }, 
        nameValid: false,
        surnameValid: false,
        formValid: false
    }


    onNameChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: this
                .toFormalise(value)
                .replace(/[^aA-zZ]/g,"")
        }, () => { this.validateField(name, value) });

        console.log([value])
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let surnameValid = this.state.surnameValid;

        switch(fieldName) {
            case "name":
                nameValid = (value.length > 2);
                fieldValidationErrors.name = nameValid ? "" : "name is too short";
                break;
            case "surname":
                surnameValid = (value.length > 2);
                fieldValidationErrors.surname = surnameValid ? "": "surname is too short";
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            surnameValid: surnameValid,
        }, this.validateForm);
    }
    

    validateForm() {
        this.setState({
            formValid: this.state.nameValid && this.state.surnameValid});
    }

    onDateChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log([value])
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
    
    errorClass(error) {
        return(error.length === 0 ? "" : "is-invalid");
    }

    render(){
        const {name, surname, fullDate} = this.state;
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this.toSubmit}>
                
                <div>      
                <input
                    type="text"
                    placeholder="name"
                    className={`form-control ${this.errorClass(this.state.formErrors.name)} add-name`}
                    name="name"
                    value={name}
                    onChange={this.onNameChange} />
                <div className="invalid-feedback">
                    {this.state.formErrors.name}
                </div>
                </div>

                <div>    
                <input
                    type="text"
                    placeholder="surname"
                    className={`form-control ${this.errorClass(this.state.formErrors.surname)} add-surname`}
                    name="surname"
                    value={surname}
                    onChange={this.onNameChange} />
                <div className="invalid-feedback">
                    {this.state.formErrors.surname}
                </div>   
                </div> 

                <div>
                <input
                    type="date"
                    min="1900-01-01"
                    max={new Date().toISOString().split("T")[0]}
                    required
                    className="form-control add-date"
                    name="fullDate"
                    value={fullDate}
                    onChange={this.onDateChange} />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    disabled={!this.state.formValid}>
                    Add
                </button>
            </form>

        )
    };
};



