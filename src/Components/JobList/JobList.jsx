import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateJob from '../CreateJob/CreateJob'

class JobList extends Component {

    state = {
        createJobContent: true
    }

    createJobHandler = () => {
        this.setState({
            createJobContent: false
        })
    }

    saveJob = () => {
        this.setState({
            createJobContent: true
        })
    }

    cancel = () => {
        this.setState({
            createJobContent: true
        })
    }

    deleteJobHandler = (id) => {
        this.props.deleteJob(id)
    }

    moreAboutJob = (id) => {
        this.props.getJobId(id)
    }

    render() {
        const { classes, jobsList, createJob } = this.props
        const { createJobContent } = this.state
        const sortedJobsList = jobsList.sort((x, y)=> {
            return (x.urgent === y.urgent) ? 0 : x.urgent ? -1 : 1;
        });
        return (
            <>
                {
                    createJobContent
                    ?
                    sortedJobsList.map(item => {
                        return (
                            <Card className={classes.card} key={item.id}>
                                <CardContent>
                                    <Typography variant='h5' component='h4'>
                                        {item.title}
                                    </Typography>
                                    <Typography component='div'>
                                        <b>Bonus:</b> {item.bonus} $<br/>
                                        <b>Location:</b> {item.location} <br/>
                                        <b>Urgent</b> {
                                            item.urgent
                                            ?
                                                <div style={{background: 'green', height: '10px', width: '50px', display: 'inline-block'}}></div>
                                            :
                                                <div style={{background: 'red', height: '10px', width: '50px', display: 'inline-block'}}></div>
                                        }
                                    </Typography>
                                </CardContent>
                                <Button variant='contained' className={classes.button} onClick={() => this.moreAboutJob(item.id)}>Learn More</Button>
                                <Button variant='contained' color='secondary' style={{marginLeft: '10px'}} className={classes.button} onClick={() => this.deleteJobHandler(item.id)}>
                                    Delete Job
                                </Button>
                            </Card>
                        )
                    })
                    :
                    <CreateJob
                        createJob={createJob}
                        classes={classes}
                        saveJob={this.saveJob}
                    />
                }
                <Button variant='contained' color={createJobContent ? 'primary' : 'default'} className={classes.button} onClick={createJobContent ? this.createJobHandler : this.cancel}>
                    {createJobContent ? 'Create Job' : 'Cancel'}
                </Button>
            </>
        )
    }
}

export default JobList