import { jobsAPI } from "../../api/api"

export const getJobsList = () => {
    return (dispatch) => {
         jobsAPI.get(jobsAPI.url)
            .then((response) => {
                const data = response.data
                dispatch({
                    type: 'GET_JOBS_LIST',
                    payload: data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getJobId = (id) => {
    return (dispatch) => {
        jobsAPI.get(`${jobsAPI.url}/${id}`)
            .then((response) => {
                const data = response.data
                console.log('zzz',data)
                dispatch({
                    type: 'GET_JOB_ID',
                    payload: data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const createJob = (data) => {
    return (dispatch) => {
        jobsAPI.post(jobsAPI.url, data)
            .then((response) => {
                const data = response.data
                dispatch({
                    type: 'CREATE_JOBS',
                    payload: data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const deleteJob = (id) => {
    return (dispatch) => {
        jobsAPI.delete(`${jobsAPI.url}/${id}`)
            .then(() => {
                dispatch({
                    type: 'DELETE_JOB',
                    payload: id,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
