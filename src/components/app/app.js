import React, { Component } from "react";
import BdayElementAddForm from "../bday-element-add-form/bday-element-add-form";
import Headline from "../headline/headline";
import BdayFilter from "../bday-filter/bday-filter";
import BdayList from "../bday-list/bday-list";
import Searcher from "../searcher/searcher";
import "./app.css";


export default class App extends Component {

    lastBdayItemId = 0;

    state = {
        birthdayData:[
            this.createBdayItem("Xuy", "Pizda", "1488-10-22"),
            this.createBdayItem("Loh", "Pidr", "1984-11-21"),
            this.createBdayItem("Grh", "Goroh", "1337-5-21")
        ],
        searchText: ""
    };



    createBdayItem (name, surname, fullDate){
        return {
            name,
            surname,
            fullDate,
            id: this.lastBdayItemId++
        }
    }

    deleteBdayItem = (id) => {
        this.setState(({birthdayData}) => {
            const index = birthdayData.findIndex((elem) => elem.id === id);
            const newData = [...birthdayData.slice(0, index), ...birthdayData.slice(index + 1)];

            return {
                birthdayData: newData
            };
        });
    };

    addBdayItem = (name, surname, fullDate) => {
        const newItem = this.createBdayItem(name, surname, fullDate);
        
        this.setState(({birthdayData}) => {
            const newData = [...birthdayData, newItem]

            return {
                birthdayData: newData
            };
        });
        console.table(newItem);
    };

    searchPerson(birthdayData, searchText){
        if (searchText.length === 0){
            return birthdayData
        }
        return birthdayData.filter((item) => {
            return (item.name
                        .toLowerCase()
                        .indexOf(searchText.toLowerCase()) > -1) 
            || (item.surname
                    .toLowerCase()
                    .indexOf(searchText.toLowerCase()) > -1)
        })
    }  

    onSearchChange = (searchText) => {
        this.setState({searchText});
    }

    render() {
        const {birthdayData, searchText} = this.state;
        const visibleData = this.searchPerson(birthdayData, searchText);
        return (
            <div className = "app">
                <Headline />
                <div>sosi loh</div>
                <div className = "top-panel d-flex">
                    <Searcher onSearchChange = {this.onSearchChange} />
                    <BdayFilter />
                </div>
                <BdayList
                    bdayData = {visibleData}
                    onDelete = {this.deleteBdayItem} />
                <BdayElementAddForm onAdd = {this.addBdayItem} />
            </div>
        );
    };
};



