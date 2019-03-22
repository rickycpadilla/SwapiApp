// @flow
import { Navigation } from 'react-native-navigation'
import Main from './Main'
import PersonDetail from './PersonDetail'

export function registerScreens() {
    Navigation.registerComponent('Main', () => Main)
    Navigation.registerComponent('PersonDetail', () => PersonDetail)
}