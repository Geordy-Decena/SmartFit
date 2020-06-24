import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        sets: '',
        reps: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const newItem = {
            name: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps
        }

        this.props.addItem(newItem)
        this.toggle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Button
                        color='dark'
                        style={{ marginBottom: '2rem' }}
                        onClick={this.toggle}
                    >
                        Add Exercise
                            </Button> : null}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}
                    >Add to ExerciseList
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Exercise</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Exercise"
                                    onChange={this.onChange}
                                    style={{ marginBottom: '1vh' }}
                                />
                                <Label for="reps">Repetitions</Label>
                                <Input
                                    type="number"
                                    name="reps"
                                    id="item"
                                    placeholder="Add number of reps"
                                    onChange={this.onChange}
                                    style={{ marginBottom: '1vh' }}
                                />
                                <Label for="sets">Sets</Label>
                                <Input
                                    type="number"
                                    name="sets"
                                    id="item"
                                    placeholder="Add number of Sets"
                                    onChange={this.onChange}
                                />
                                {(this.state.name !== '' && this.state.reps !== '' && this.state.sets !== '') ?
                                    <Button
                                        color="dark"
                                        style={{ marginTop: '2rem' }}
                                        block
                                    >
                                        Add
                                </Button>
                                    : null}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal >

            </div >
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal)