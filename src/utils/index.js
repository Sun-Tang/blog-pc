export default function localGet(key) {
    const value = window.localStorage.getItem(key);
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
        return value;
    }
}