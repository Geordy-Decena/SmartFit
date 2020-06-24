import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class Selections extends Component {

    render() {

        return (
            <Fragment>
                <div style={{ paddingTop: '15%' }}>
                    <Link to="/SmartWorkout">
                        <div className="workoutSelect" style={{ border: '2px solid black', width: '40%', float: 'left', textAlign: 'center', padding: '2%', height: '100%', marginLeft: '4%' }}>
                            <h1>Smart Workout</h1>
                            <h5>SmartFit will create a workout routine based on your desired results and physicality!</h5>
                        </div>
                    </Link>
                    <Link to="/ExerciseList">
                        <div className="workoutSelect" style={{ border: '2px solid black', width: '40%', float: 'right', textAlign: 'center', padding: '2%', paddingBottom: '4%', height: '100%', marginRight: '4%' }}>
                            <h1>Custom Workout</h1>
                            <h5>Create your own routine!</h5>
                        </div>
                    </Link>
                </div>
            </Fragment >
        )
    }
}

export default (Selections)