import React, { Component, Fragment } from 'react'
import { getList } from './GetList'

class SmartExerciseList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         items: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('/api/lists')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 items: json
    //             })
    //         })
    // }

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('/api/lists')
            .then(res => res.json())
            .then(list => this.setState({ list }, () => console.log('List fetched', list)))
    }

    render() {
        return (
            <Fragment>
                <div>
                    {console.log(getList())}
                    <div style={{ display: 'inline-block', width: '50%', marginRight: '4vh' }} >
                        <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px', backgroundColor: 'lightgray' }}>Exercise</h1>
                        {this.state.list.map(list =>
                            list.id === getList() ?
                                <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px' }} key={list.id}>{list.name}</h1> : null
                        )}
                    </div>
                    <div style={{ display: 'inline-block', width: '20%', marginRight: '4vh' }}>
                        <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px', backgroundColor: 'lightgray' }}>Reps</h1>
                        {this.state.list.map(list =>
                            list.id === getList() ?
                                <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px' }} key={list.id}>{list.reps}</h1> : null
                        )}
                    </div>
                    <div style={{ display: 'inline-block', width: '20%' }}>
                        <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px', backgroundColor: 'lightgray' }}>Sets</h1>
                        {this.state.list.map(list =>
                            list.id === getList() ?
                                <h1 style={{ border: '2px solid black', textAlign: 'center', marginRight: '0%', borderRadius: '10px', padding: '.5vw', marginBottom: '2vh', fontSize: '30px' }} key={list.id}>{list.sets}</h1> : null
                        )}
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default (SmartExerciseList)

