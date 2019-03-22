// @flow

import React from 'react'
import type { Person } from '../../utils/types'
import { colors } from '../../utils/styles'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

type Props = {
    person: Person
}

export default (props: Props) => {

    const { person } = props

    return (
        <View
            style={styles.container}
        >
            <Text>{person.name}</Text>
            <Text>{person.gender}</Text>
            <Text>{person.height}</Text>
            <Text>{person.eyeColor}</Text>
            <Text>{person.mass}</Text>
            <Text>{person.birthYear}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite
    },
})