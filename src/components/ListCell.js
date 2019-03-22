// @flow

import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import { colors } from '../utils/styles';

type Props = {
    id: string,
    title: string,
    subtitle: ?string,
    onCellPress: () => void
}

export default (props: Props) => {

  const { id, title, subtitle, onCellPress } = props;

  return (
    <TouchableHighlight
        style={styles.container}
        onPress={() => onCellPress()}
        underlayColor={colors.lightGray}
    >
        <View style={styles.cell}>
            <Text style={styles.title}>
            {title}
            </Text>
            <Text style={styles.subtitle}>
            {subtitle}
            </Text>
        </View>
    </TouchableHighlight>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    alignSelf: 'stretch',
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.offWhite,
  },
  title: {
    color: colors.darkGray,
    fontWeight: '600',
    fontSize: 16
  },
  subtitle: {
    color: colors.lightGray,
    fontWeight: '400',
    fontSize: 14
  }
});