import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../../Redux/Actions"
import Button from '@material-ui/core/Button'
import JobList from '../../Components/JobList/JobList'
import CreateJob from "../../Components/CreateJob/CreateJob"
import JobItem from "../../Components/JobItem/JobItem";
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    more: {
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
})

class JobListContainer extends Component {

    state = {
        createJobFields: false
    }

    componentDidMount() {
        const { actions } = this.props
        actions.getJobsList()
    }

    createJobHandler = () => {
        this.setState({
            createJobFields: true
        })
    }

    render() {
        const { classes, jobsList, jobsId, isJobItem, actions } = this.props
        const { createJobFields } = this.state
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            {
                                isJobItem
                                ?
                                <JobList
                                    getJobId={actions.getJobId}
                                    jobsList={jobsList}
                                    classes={classes}
                                    deleteJob={actions.deleteJob}
                                />
                                :
                                <JobItem
                                     jobsId={jobsId}
                                     classes={classes}
                                     getJobsList={actions.getJobsList}
                                 />
                            }
                            {
                                createJobFields
                                ?
                                <CreateJob
                                    createJob={actions.createJob}
                                    classes={classes}
                                />
                                :
                                <Button variant="contained" color="primary" className={classes.button} onClick={this.createJobHandler}>
                                    Create Job
                                </Button>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        jobsList: store.settings.Reducer.jobsList,
        jobsId: store.settings.Reducer.jobsId,
        isJobItem: store.settings.Reducer.isJobItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                ...actions
            }, dispatch)
    }
}

JobListContainer.propTypes  = {
    actions: PropTypes.object,
    classes: PropTypes.object,
    jobsList: PropTypes.array,
    jobsId: PropTypes.array,
    isJobItem: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(JobListContainer))