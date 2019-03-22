// @flow

import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Main',
        title: 'Swapi App'
    }
})
