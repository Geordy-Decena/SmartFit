import React, { Component, Fragment } from 'react'
import { Container, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'
import ItemModal from './ItemModal'

class ExerciseList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }

    render() {
        const { items } = this.props.item;
        return (
            <Fragment>
                <ItemModal />
                <Container style={{ display: 'inline-block' }}>
                    <ul style={{ listStyleType: 'none', display: 'inline-block', padding: '0', width: '5 % ' }}>
                        {items.map(({ _id, name, sets, reps }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <li style={{ width: '100%', padding: '1%', marginTop: '36px', marginBottom: '36px', textAlign: 'center' }}>
                                    {this.props.isAuthenticated ? <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                            </Button> : null}
                                </li>
                            </CSSTransition>
                        ))}
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: '10px', borderRadius: '10px', width: '40%', display: 'inline-block' }}>
                        <li style={{ border: '1px solid black', borderRadius: '10px', width: '100%', padding: '10px', margin: '10px', textAlign: 'center', background: 'lightgray' }}>
                            <h4>Exercise</h4>
                        </li>
                        <TransitionGroup className="exercise-list">
                            {items.map(({ _id, name, sets, reps }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <li style={{ border: '1px solid black', borderRadius: '10px', width: '100%', padding: '10px', margin: '10px', textAlign: 'center' }}>
                                        <h4>{name}</h4>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: '1%', width: '20%', display: 'inline-block' }}>
                        <li style={{ border: '1px solid black', width: '100%', padding: '10px', margin: '10px', borderRadius: '10px', textAlign: 'center', background: 'lightgray' }}>
                            <h4>Reps</h4>
                        </li>
                        <TransitionGroup className="exercise-list">
                            {items.map(({ _id, name, sets, reps }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <li style={{ border: '1px solid black', width: '100%', padding: '10px', margin: '10px', borderRadius: '10px', textAlign: 'center' }}>
                                        <h4>{reps}</h4>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: '1%', width: '20%', display: 'inline-block' }}>
                        <li style={{ border: '1px solid black', width: '100%', padding: '10px', margin: '10px', borderRadius: '10px', textAlign: 'center', background: 'lightgray' }}>
                            <h4>Sets</h4>
                        </li>
                        <TransitionGroup className="exercise-list">
                            {items.map(({ _id, name, sets, reps }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <li style={{ border: '1px solid black', width: '100%', padding: '10px', margin: '10px', borderRadius: '10px', textAlign: 'center' }}>
                                        <h4>{sets}</h4>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ul>
                </Container >
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(ExerciseList);