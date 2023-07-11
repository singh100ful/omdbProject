import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../theme/colors';
import {defaultDimensions} from '../../theme/metrics';

interface SeparatorAtomProps {
  height?: number;
}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({height}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {height: height ? height : 1}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: defaultDimensions.mediumScale,
  },
  line: {flex: 1, backgroundColor: Colors.border},
});
