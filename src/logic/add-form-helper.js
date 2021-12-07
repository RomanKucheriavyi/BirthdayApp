export function toFormalise (name) {
    if (typeof name !== "string"){
        return [];
    }
    return name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : name;
};

export function errorClass(error) {
    if (typeof error !== "string"){
        return [];
    }
    return(error.length === 0 ? "" : " is-invalid");
};

