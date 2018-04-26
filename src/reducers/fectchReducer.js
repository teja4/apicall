function FectchReducers(
    userData = {
        data: {},
        fetch: false,
        error: "",
    }, action) {
    let NewData;

    switch (action.type) {
        case "Fetching":
            NewData = {
                ...userData,
                fetch: true,
                data: {},
                error: ""
            };
            break;
        case "Fetching_success":
            NewData = {
                ...userData,
                fetch: false,
                data: action.data,
                error: ""
            };
            break;
        case "Fetching_error":
            NewData = {
                ...userData,
                fetch: false,
                data: {},
                error: action.message
            };
            break;
        default:
            NewData = { ...userData }
            break;
    }
    return NewData;
}

export default FectchReducers;