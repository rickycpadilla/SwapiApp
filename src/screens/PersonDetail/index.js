// @flow

import React, { Component } from 'react'
import type { Person } from '../../utils/types'
import PersonDetail from './PersonDetail'

type Props = {
    person: Person
}

type State = {
}

export default class MainScreen extends Component < Props, State > {

    state: State = {}

    constructor() {
        super()
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <PersonDetail
                person={this.props.person}
            />
        )
    }

}