export const initialState = {
    user: null,
    isAdmin: false,
};

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_ADMIN":
            return {
                ...state,
                isAdmin: action.isAdmin,
            };

        case "SET_HANDLE":
            return {
                ...state,
                handle: action.handle,
            };

        case "SET_GUESTS":
            return {
                ...state,
                guests: action.guests,
            };

        case "SET_BOOK_DAYS":
            return {
                ...state,
                bookDays: action.bookDays,
            };

        case "SET_PROFILEPOP":
            return {
                ...state,
                profilepop: action.profilepop,
            };

        case "SET_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
};
export default reducer;
