import React, { Component, Fragment } from 'react'
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'

export class Home extends Component {

    render() {
        return (
            <body>
                < Fragment >
                    <div style={{ width: '100%', background: 'none' }}>
                        <div style={{ border: '2px solid black', display: 'inline-block', width: '100%', position: 'center', float: 'left', textAlign: 'center', marginBottom: '10vh', marginTop: '10vh' }}>
                            <h1 style={{ padding: '1%', fontSize: '10vh' }}>
                                Welcome to SmartFit
                            </h1>
                            <h3 style={{ marginBottom: '2vh' }}>
                                Your active lifestyle begins today!
                            </h3>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div style={{ border: '2px solid black', width: '30%', display: 'inline-block', float: 'left', marginLeft: '15%' }}>
                                < h4 style={{ textAlign: 'center', padding: '1%' }}>
                                    <RegisterModal />
                                </h4>
                            </div>
                            <div style={{ border: '2px solid black', width: '30%', display: 'inline-block', float: 'right', marginRight: '15%' }}>
                                <h4 style={{ textAlign: 'center', padding: '1%', color: 'black' }}>
                                    <LoginModal />
                                </h4>
                            </div>
                        </div>
                    </div>
                </Fragment >
            </ body >
        )
    }
}

export default (Home)
