import React from "react";

import "./bday-list.css";

const BdayList = ({bdayData, onDelete}) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    function getBdayDay (birthDate) {
        return birthDate ? new Date(birthDate).getDate() : birthDate;
    }

    function getMonthName (birthDate) {
        return birthDate ? monthNames[new Date(birthDate).getMonth()] : birthDate;
    }

    function getBdayYear (birthDate) {
        return birthDate ? new Date(birthDate).getFullYear() : birthDate;
    }

    function getOrdinalNumber (number) {
        const suffix = ["th","st","nd","rd"];
        const v = number % 100;
        return `${number}-${(suffix[(v-20)%10] || suffix[v] || suffix[0])}`;
    }

    function isBirhdayGoneThisYear(today, bday) {
        if (today.getMonth() > bday.getMonth()) {
            return true;
        }
        if (today.getMonth() == bday.getMonth() && today.getDate() > bday.getDate()) {
            return true;
        }
        return false;
    }

    function getDaysToBday (birthDate) {
        const today = new Date();
        const bday = new Date(birthDate);
        const millisInDay = 86400000;
        bday.setFullYear(today.getFullYear());
        
        if (isBirhdayGoneThisYear(today, bday)) {
            bday.setFullYear(today.getFullYear() + 1);
        }
        return ((bday - today)/millisInDay + 1).toFixed();
    }


    const BirthdaysList = bdayData.map((birthdayItem) => {
        let { id, name, surname, fullDate} = birthdayItem;
        const ordinalDay = getOrdinalNumber(getBdayDay(fullDate));
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{surname}</td>
                <td>On the {ordinalDay} of {getMonthName(fullDate)}, {getBdayYear(fullDate)}</td>
                <td>{getDaysToBday(fullDate)} days left</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick = {() => onDelete(id)}>
                        <i className="bi bi-person-x"></i>
                    </button> 
                </td>
            </tr>
        );
    });


    return (
        <div>
            <table className = "table table-hover table-borderless">
                <tbody>
                    {BirthdaysList}
                </tbody>
            </table>
        </div> 
    );
};

export default BdayList;

