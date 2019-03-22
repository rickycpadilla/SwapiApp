// @flow

import React, { Component } from 'react'
import type { Person } from '../../utils/types'
import api from '../../utils/api'
import Main from './Main'

type Props = {
    navigator: any
}

type State = {
    people: Array<Person>
}

const testData: Array<Person> = [
    {
        id: "string1",
        name: "string 1",
        height: "string",
        mass: "string",
        skinColor: "string",
        eyeColor: "string",
        birthYear: "string",
        gender: "string"
    },
    {
        id: "string2",
        name: "string 2",
        height: "string",
        mass: "string",
        skinColor: "string",
        eyeColor: "string",
        birthYear: "string",
        gender: "string"
    },
]

export default class MainScreen extends Component < Props, State > {

    state: State = {
        people: []
    }

    constructor() {
        super()
    }

    componentDidMount() {
        // make api call here

        const successCallback = (json: any) => {
            const people: Array<Person> = json.results.map( personJson => {
                return {
                    id: personJson.name,
                    name: personJson.name,
                    height: personJson.height,
                    mass: personJson.mass,
                    skinColor: personJson.skin_color,
                    eyeColor: personJson.eye_color,
                    birthYear: personJson.birth_year,
                    gender: personJson.gender
                }
            })
            this.setState({ people })
        }

        const errorCallback = (error: any) => {
            
        }

        api.getPeople(successCallback, errorCallback)
    }

    _selectPerson = (person: Person) => {
        this.props.navigator.push({
            screen: 'PersonDetail',
            title: person.name,
            backButtonTitle: '',
            passProps: {
                person: person
            }
        })
    }

    render() {
        return (
            <Main
                people={this.state.people}
                selectPerson={this._selectPerson}
            />
        )
    }

}