import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class JobList extends Component {

    deleteJobHandler = (id) => {
        this.props.deleteJob(id)
    }

    moreAboutJob = (id) => {
        this.props.getJobId(id)
    }

    render() {
        const { classes, jobsList } = this.props
        const sortedJobsList = jobsList.sort(function(x, y) {
            return (x.urgent === y.urgent) ? 0 : x.urgent ? -1 : 1;
        });
        return (
            <>
                {
                    sortedJobsList.map(item => {
                        return (
                            <Card className={classes.card} key={item.id}>
                                <CardContent>
                                    <Typography variant="h5" component="h4">
                                        {item.title}
                                    </Typography>
                                    <Typography component="div">
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
                                <Button variant="contained" className={classes.button} onClick={() => this.moreAboutJob(item.id)}>Learn More</Button>
                                <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.deleteJobHandler(item.id)}>
                                    Delete Job
                                </Button>
                            </Card>
                        )
                    })
                }
            </>
        )
    }
}

export default JobList