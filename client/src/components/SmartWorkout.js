import React, { Component, Fragment } from 'react'
import SmartList from './SmartList'

//Age
//Fat Burner or Mass Gainer
//Push or Pull or Legs or All around

export class SmartWorkout extends Component {

    render() {

        return (
            <Fragment>
                <h1 style={{ textAlign: 'center', fontSize: '50px', padding: '1%' }}>SmartWorkout</h1>
                <SmartList />
            </Fragment>
        )
    }
}

export default (SmartWorkout)