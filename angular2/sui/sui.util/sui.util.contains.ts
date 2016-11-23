export function contains(val: Object, search: Object) {
    if (!search)
        return true;
    if (typeof val === 'string') {
        if (val.toLowerCase().includes(search.toString().toLowerCase())) {
            return true;
        }
    } else if (typeof val === 'number') {
        return Number(val) === Number(search);
    } else if (typeof val === 'boolean') {
        return val.toString() === search.toString();
    }
}
