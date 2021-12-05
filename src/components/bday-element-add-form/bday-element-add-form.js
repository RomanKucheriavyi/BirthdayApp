import React, { Component } from "react";
import { errorClass, toFormalise } from "../../logic/add-form-helper";
import { validateDate } from "../../logic/date-helper";
import "./bday-element-add-form.css"; 


export default class BdayElementAddForm extends Component {

    state = {
        name: "",
        surname: "",
        fullDate: "", 
        formErrors: {
            name:"",
            surname:"",
            fullDate:""
        }, 
        isNameValid: false,
        isSurnameValid: false,
        isFullDateValid: false,
        isFormValid: false
    }

    onNameChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: 
                toFormalise(value)
                .replace(/[^aA-zZ]/g,"")
        }, () => {this.validateField(name, value)});
    
        console.log([value]);
    };

    validateForm() {
        this.setState({
            isFormValid: this.state.isNameValid && this.state.isSurnameValid && this.state.isFullDateValid});
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let isNameValid = this.state.isNameValid;
        let isSurnameValid = this.state.isSurnameValid;
        let isFullDateValid = this.state.isFullDateValid;
    
        switch(fieldName) {
            case "name":
                isNameValid = (value.length > 2);
                fieldValidationErrors.name = isNameValid ? "" : "name is too short";
                break;
            case "surname":
                isSurnameValid = (value.length > 2);
                fieldValidationErrors.surname = isSurnameValid ? "": "surname is too short";
                break;
            case "fullDate":
                isFullDateValid = (validateDate(value));
                fieldValidationErrors.fullDate = isFullDateValid ? "": "date is invalid";
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            isNameValid: isNameValid,
            isSurnameValid: isSurnameValid,
            isFullDateValid: isFullDateValid
        }, this.validateForm);
    };


    onDateChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, () => {this.validateField(name, value)});
        console.log([value])
    };
    
    toSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.surname, this.state.fullDate);
        this.setState({
            name: "",
            surname: "",
            fullDate: ""
        });
    };

    render(){
        const {name, surname, fullDate} = this.state;
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this.toSubmit}>
                
                <div>      
                    <input
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        className={`form-control ${errorClass(this.state.formErrors.name)} add-name`}
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
                        placeholder="Surname"
                        autoComplete="off"
                        className={`form-control ${errorClass(this.state.formErrors.surname)} add-surname`}
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
                        className={`form-control ${errorClass(this.state.formErrors.fullDate)} add-date`}
                        name="fullDate"
                        value={fullDate}
                        onChange={this.onDateChange} />
                    <div className="invalid-feedback">
                        {this.state.formErrors.fullDate}
                    </div>  
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    disabled={!this.state.isFormValid}>
                    Add
                </button>
            </form>

        );
    };
};



