// Initial users
export const initialUsers = [
    {
        id: 1,
        username: "admin",
        fullName: "Administrator",
        email: "admin@gmail.com",
        password: "admin123",
        role: "ADMIN"
    },
    {
        id: 2,
        username: "robel",
        fullName: "Robel Yitbarek",
        email: "robel@gmail.com",
        password: "password123",
        role: "USER"
    }
];


// LOGIN
export function login(users, username, password) {

    const user = users.find(
        (u) =>
            u.username.toLowerCase() === username.toLowerCase() &&
            u.password === password
    );

    if (!user) {
        return {
            success: false,
            message: "Invalid username or password."
        };
    }

    return {
        success: true,
        user: user
    };
}


// LOGOUT
export function logout() {

    return {
        isLoggedIn: false,
        currentUser: null
    };
}


// REGISTER
export function register(users, newUser) {

    const exists = users.some(
        (u) =>
            u.username.toLowerCase() === newUser.username.toLowerCase()
    );

    if (exists) {
        return {
            success: false,
            message: "Username already exists."
        };
    }

    const user = {
        id: users.length + 1,
        username: newUser.username,
        fullName: newUser.fullName,
        email: newUser.email,
        password: newUser.password,
        role: newUser.role
    };

    return {
        success: true,
        user: user,
        updatedUsers: [...users, user]
    };
}


// UPDATE
export function update(users, username, changes) {

    const updatedUsers = users.map((user) => {

        if (user.username.toLowerCase() === username.toLowerCase()) {
            return {
                ...user,
                ...changes
            };
        }

        return user;
    });

    const updatedUser = updatedUsers.find(
        (user) =>
            user.username.toLowerCase() === username.toLowerCase()
    );

    if (!updatedUser) {
        return {
            success: false,
            message: "User not found."
        };
    }

    return {
        success: true,
        user: updatedUser,
        updatedUsers: updatedUsers
    };
}


// DELETE USER
export function deleteUser(users, username) {

    const userExists = users.some(
        (user) =>
            user.username.toLowerCase() === username.toLowerCase()
    );

    if (!userExists) {
        return {
            success: false,
            message: "User not found."
        };
    }

    const updatedUsers = users.filter(
        (user) =>
            user.username.toLowerCase() !== username.toLowerCase()
    );

    return {
        success: true,
        updatedUsers: updatedUsers
    };
}