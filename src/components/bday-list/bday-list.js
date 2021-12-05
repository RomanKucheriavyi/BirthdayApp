import React from "react";
import { getBdayDay, getBdayYear, getDaysToBday, getMonthName, getOrdinalNumber } from "../../logic/date-helper";

import "./bday-list.css";

const BdayList = ({bdayData, onDelete}) => {
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



