import React, { Component } from "react";
import BdayElementAddForm from "../bday-element-add-form/bday-element-add-form";
import Headline from "../headline/headline";
import BdayFilter from "../bday-filter/bday-filter";
import BdayList from "../bday-list/bday-list";
import Searcher from "../searcher/searcher";
import "./app.css";
import { createBdayItem, filterItems, searchPerson } from "../../logic/app-helper";

export default class App extends Component {

    state = {
        birthdayData:[
            createBdayItem("Foo", "Bar", "1988-01-22"),
            createBdayItem("Waaa", "Mda", "1998-11-21"),
            createBdayItem("Grh", "Goroh", "2007-12-25")
        ],
        searchText: "",
        filter: "all"
    };

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
        const newItem = createBdayItem(name, surname, fullDate);
        
        this.setState(({birthdayData}) => {
            const newData = [...birthdayData, newItem]

            return {
                birthdayData: newData
            };
        });
        console.table(newItem);
    };

    onSearchChange = (searchText) => {
        this.setState({searchText});
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render() {
        const {birthdayData, searchText, filter} = this.state;
        const visibleData = filterItems(searchPerson(birthdayData, searchText), filter);
        return (
            <div className = "app">
                <Headline />
                <div className = "top-panel d-flex">
                    <Searcher onSearchChange = {this.onSearchChange} />
                    <BdayFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <BdayList
                    bdayData = {visibleData}
                    onDelete = {this.deleteBdayItem} />
                <BdayElementAddForm onAdd = {this.addBdayItem} />
            </div>
        );
    };
};





