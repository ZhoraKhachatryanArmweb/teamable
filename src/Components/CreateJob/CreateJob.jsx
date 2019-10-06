import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

class CreateJob extends Component {

    state = {
        title: '',
        bonus: null,
        location: '',
        urgent: false,
        error: ''
    }

    createJobHandler = () => {
        const { title, bonus, location, urgent } = this.state
        if(title !== '' && bonus !== null && location !== '') {
            this.props.createJob({
                'title': title,
                'bonus': bonus,
                'location': location,
                'urgent': urgent
            })
            this.props.saveJob()
        } else {
            this.setState({
                error: 'Please fill in all fields'
            })
        }
    }

     handleChangeField = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeUrgent = e => {
        this.setState({
            urgent: e.target.value
        })
    }

    render() {
        const { classes } = this.props
        const { error } = this.state
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline'}}>
                    <TextField
                        label='Job title'
                        placeholder='Job title'
                        className={classes.textField}
                        margin='normal'
                        name='title'
                        onChange={this.handleChangeField}
                    />
                    <TextField
                        label='Bonus'
                        placeholder='Bonus'
                        className={classes.textField}
                        margin='normal'
                        name='bonus'
                        type='number'
                        onChange={this.handleChangeField}
                    />
                    <TextField
                        label='Location'
                        placeholder='Location'
                        className={classes.textField}
                        margin='normal'
                        name='location'
                        onChange={this.handleChangeField}
                    />
                    <Select
                        value={this.state.urgent}
                        onChange={this.handleChangeUrgent}
                    >
                        <MenuItem value={true}>True</MenuItem>
                        <MenuItem value={false}>False</MenuItem>
                    </Select>
                    <Button variant='contained' color='primary' className={classes.button} onClick={this.createJobHandler}>
                        Save
                    </Button>
                </div>
                <div style={{color: 'red'}}>
                    {error !== '' && error}
                </div>
            </>
        )
    }
}

export default CreateJob