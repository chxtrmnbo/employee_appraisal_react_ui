import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// let navigate = useNavigate();
let dummy = [
    {
        name: 'Ratee Employee',
        email: 'ratee@gmail.com',
        password: '1234',
        role: 1
    },
    {
        name: 'Supervisor Employee',
        email: 'supervisor@gmail.com',
        password: '1234',
        role: 2
    },
    {
        name: 'Hr Employee',
        email: 'hr@gmail.com',
        password: '1234',
        role: 3
    }
]

const userRedirect = (role) => {

    if (role === 1) {
        window.location.href = "/Assessment"
        // navigate("/Assessment")
    }
    else if (role === 2) {
        window.location.href = "/Supervisor"
        // navigate("/Supervisor")
    }
    else {
        window.location.href = "/Hr"
        // navigate("/Hr")
    }
}

const storeToken = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const initialStateValue = {
    isValid: true,
    loading: false,
    isAuthenticated: false,
    user: {
        name: "",
        email: "",
        departmentId: 0,
        role: 0
    }
};



export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },

    // Reducers
    reducers: {

        SET_LOGIN: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload
            };
        },
        setUser: (state, action) => {
            state.value = action.payload;
        },
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout, setAppraisals, setUser, SET_LOGIN } = userSlice.actions;


// Actions
export const userLogin = (payload) => async dispatch => {
    // console.log(payload)
    // dispatch(setUser(payload))

    const index = dummy.map(el => el.email).indexOf(payload.email)
    console.log(index)

    // Email/User not existing
    if (index == -1) {
        dispatch(SET_LOGIN({
            isValid: false
        }))
    } else {
        // If credentials are correct
        if (dummy[index].email == payload.email && dummy[index].password == payload.password) {
            console.log(dummy[index])
            let user = {
                name: dummy[index].name,
                email: dummy[index].email,
                departmentId: dummy[index].departmentId,
                role: dummy[index].role
            }
            dispatch(SET_LOGIN({
                isValid: true,
                isAuthenticated: true,
                user
            }))
            storeToken(user)
            userRedirect(user.role);
        }
        // If credentials are incorrect
        else {
            dispatch(SET_LOGIN({
                isValid: false
            }))
        }
        // Store token


    }

    // let error = false
    // if (error == true) {
    //     dispatch(SET_LOGIN({
    //         isValid: false,

    //     }))
    // } else {
    //     dispatch(SET_LOGIN({
    //         isValid: true,
    //         isAuthenticated: true,
    //         user: {
    //             name: payload.email,
    //             email: payload.email,
    //             departmentId: 1,
    //             role: 2
    //         }
    //     }))
    // }

    // const index = payload.map(el => el.email).indexOf(evt.target.email.value)
    // if (index == -1) {
    //     setError(true)
    // } else {
    //     if (dummy[index].email == evt.target.email.value && dummy[index].password == evt.target.password.value) {
    //         let wew = JSON.stringify(dummy[index])
    //         localStorage.setItem('user', wew);

    //         if (dummy[index].role === 1) {
    //             navigate("/Assessment")
    //         }
    //         else if (dummy[index].role === 2) {
    //             navigate("/Supervisor")
    //         }
    //         else {
    //             navigate("/Hr")
    //         }
    //     }
    // }
}
export const userFetch = (payload) => async dispatch => {
    dispatch(SET_LOGIN({
        user: JSON.parse(localStorage.getItem("user"))
    }))
}


export default userSlice.reducer;
