export function fetchData() {
    return {
        type: "Fetching"
    };
}
export function fetchSuccess(data) {
    return {
        type: "Fetching_success",
        data
    };
}
export function fetchError(message) {
    return {
        type: "Fetching_error",
        message
    };
}