import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';
import Instance from '../services/axios';
// let navigate = useNavigate();

const initialStateValue = {
    appraisals: [],
    formData: {
        appraisalYear: "",
        supervisorComments: "",
        rateeComments: "",
    },
    metrics: [],
    isLoading: false,
    isError: false,
    isValidated: false
};

export const appraisalsSlice = createSlice({
    name: "appraisals",
    initialState: { value: initialStateValue },

    // Reducers
    reducers: {
        SET_APPRAISALS: (state, action) => {
            state.value.appraisals = action.payload
        },
        SET_LOADING: (state, action) => {
            state.value.isLoading = action.payload
        },
        SET_VALIDATED: (state, action) => {
            state.value.isValidated = action.payload
            return true
        },
        SET_ERROR: (state, action) => {
            state.value.isError = action.payload
        },
        SET_YEAR: (state, action) => {
            state.value.formData.appraisalYear = action.payload.appraisalYear
        },
        SET_COMMENT: (state, action) => {
            state.value.formData = {
                ...state.value.formData,
                ...action.payload
            }
        },
        SET_METRICS: (state, action) => {
            console.log(action)
            // state.value.metrics[action.payload.index] = action.payload.metrics
            state.value.metrics = action.payload.metrics
        },
        // SET_FORM: (state, action) => {
        //     state.value.formData = state.value.formData = {
        //         ...state.value.formData,
        //         ...action.payload
        //     };
        // },

    },
});

export const { SET_APPRAISALS, SET_COMMENT, SET_YEAR, SET_LOADING, SET_ERROR, SET_METRICS, SET_VALIDATED } = appraisalsSlice.actions;

// Actions
export const submitAppraisal = (data) => async dispatch => {
    // dispatch(SET_LOADING(true))
    // alert('Submit')
    // console.log(dispatch(SET_VALIDATED()))
    // await Instance.get('/appraisals')
    //     .then(res => {
    //         // console.log(res.data)
    //         dispatch(SET_APPRAISALS(res.data))
    //     })
    //     .catch(err => {
    //         // Show error 
    //         // dispatch(SET_LOADING(false))
    //         dispatch(SET_ERROR(true))
    //         console.error(err);
    //     })
    // dispatch(SET_LOADING(false))
}
export const fetchAppraisals = () => async dispatch => {
    dispatch(SET_LOADING(true))
    await Instance.get('/appraisals')
        .then(res => {
            // console.log(res.data)
            dispatch(SET_APPRAISALS(res.data))
        })
        .catch(err => {
            // Show error 
            // dispatch(SET_LOADING(false))
            dispatch(SET_ERROR(true))
            console.error(err);
        })
    dispatch(SET_LOADING(false))
}
export default appraisalsSlice.reducer;
