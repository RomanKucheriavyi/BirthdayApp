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

export function getBdayDay (birthDate) {
    if (typeof birthDate !== "string"){
        return [];
    }
    return birthDate ? new Date(birthDate).getDate() : birthDate;
};


export function getMonthName (birthDate) {
    if (typeof birthDate !== "string"){
        return [];
    }
    return birthDate ? monthNames[new Date(birthDate).getMonth()] : birthDate;    
};

export function getBdayYear (birthDate) {
    if (typeof birthDate !== "string"){
        return [];
    }
    return birthDate ? new Date(birthDate).getFullYear() : birthDate;
};

export function getOrdinalNumber (number) {
    if (typeof number !== "number"){
        return [];
    } 
    const suffix = ["th","st","nd","rd"];
    const v = number % 100;
    return `${number}-${(suffix[(v-20)%10] || suffix[v] || suffix[0])}`;
};

function isBirhdayGoneThisYear(today, bday) {
    if ((Object.prototype.toString.call(today) && Object.prototype.toString.call(bday)) !== "[object Date]"){
        return [];
    }
    if (today.getMonth() > bday.getMonth()) {
        return true;
    }
    if (today.getMonth() === bday.getMonth() && today.getDate() > bday.getDate()) {
        return true;
    }
    return false;
};

export function getDaysToBday (birthDate) {
    if (typeof birthDate !== "string"){
        return [];
    }
    const today = new Date(new Date().toDateString());
    const bday = new Date(new Date(birthDate).toDateString());
    const millisInDay = 86400000;
    bday.setFullYear(today.getFullYear());
    
    if (isBirhdayGoneThisYear(today, bday)) {
        bday.setFullYear(today.getFullYear() + 1);
    }
    return ((bday - today)/millisInDay).toFixed();
};

export function validateDate (fullDate) {
    if (typeof fullDate !== "string"){
        return [];
    }
    const today = new Date();
    const inputDate = new Date(fullDate);
    const minDate = new Date ("1900-01-01");
    return ((inputDate <= today) && (inputDate > minDate)) ? true : false; 
};