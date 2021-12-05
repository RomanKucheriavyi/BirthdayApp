export function toFormalise (name) {
    return name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : name;
}

export function errorClass(error) {
    return(error.length === 0 ? "" : "is-invalid");
}

