// @flow

import React from 'react'
import type { Person } from '../../utils/types'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native'
import { colors } from '../../utils/styles'
import ListCell from '../../components/ListCell'

type Props = {
    people: Array<Person>,
    selectPerson: (person: Person) => void
}

export default (props: Props) => {

    const { people, selectPerson } = props

    return (
        <View
            style={styles.container}
        >
            <FlatList
                style={styles.listView}
                data={people}
                keyExtractor={(item, index) => item.id}
                renderItem={(item) => {
                    const person: Person = item.item
                    return (<ListCell
                        id={person.id}
                        title={person.name}
                        subtitle={person.gender}
                        onCellPress={() => selectPerson(person)}
                        
                    />)
                } 
                }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite
    },
    listView: {
        flex: 1,
        alignSelf: 'stretch',
    }
})
