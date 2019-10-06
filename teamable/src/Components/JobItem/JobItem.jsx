import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class JobItem extends Component {

    jobsList = () => {
        this.props.getJobsList()
    }

    render() {
        const { classes, jobsId } = this.props
        return (
            <>
                <Button variant="contained" className={classes.button} onClick={() => this.jobsList()}>Jobs list</Button>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h4">
                            {jobsId.title}
                        </Typography>
                        <Typography component="div">
                            {jobsId.bonus} $<br/>
                            {jobsId.location} <br/>
                            {
                                jobsId.urgent
                                    ?
                                    <div style={{background: 'green', height: '10px', width: '50px', display: 'inline-block'}}></div>
                                    :
                                    <div style={{background: 'red', height: '10px', width: '50px', display: 'inline-block'}}></div>
                            }
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default JobItem