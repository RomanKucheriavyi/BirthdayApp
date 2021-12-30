import { getDaysToBday } from "./date-helper";

let lastBdayItemId = 0;

export function createBdayItem (name, surname, fullDate){
    return {
        name,
        surname,
        fullDate,
        id: lastBdayItemId++
    };
};

export function searchPerson(birthdayData, searchText){
    if (searchText.length === 0){
        return birthdayData;
    }
    return birthdayData.filter((item) => {
        return (item.name
                    .toLowerCase()
                    .indexOf(searchText.toLowerCase()) > -1) 
        || (item.surname
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1)
    });
};

export function filterItems(birthdayData, filter) {
    if (filter === 'all') {
        return birthdayData;
    } else if (filter === 'soon') {
        return birthdayData.filter((item) => (getDaysToBday(item.fullDate) <= 30));
    } 
};