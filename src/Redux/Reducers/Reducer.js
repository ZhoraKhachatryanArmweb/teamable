const GET_JOBS_LIST = 'GET_JOBS_LIST'
const CREATE_JOB = 'CREATE_JOB'
const DELETE_JOB = 'DELETE_JOB'
const GET_JOB_ID = 'GET_JOB_ID'

let initialState = {
    jobsList: [],
    jobId: [],
    isJobItem: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS_LIST:
            return {
                ...state,
                jobsList: action.payload,
                isJobItem: true
            }
        case CREATE_JOB:
            return {
                ...state,
                jobsList: [...state.jobsList, action.payload]
            }
        case DELETE_JOB:
            return {
                ...state,
                jobsList: state.jobsList.filter(({ id }) => id !== action.payload)
            }
        case GET_JOB_ID:
            return {
                ...state,
                jobId: action.payload,
                isJobItem: false
            }
        default:
            return state
    }
}

export default Reducer