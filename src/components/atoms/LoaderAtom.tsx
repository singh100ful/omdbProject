import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {defaultDimensions} from '../../theme/metrics';
import {Colors} from '../../theme/colors';

interface LoaderAtomProps {
  loading: boolean;
}

export const LoaderAtom: React.FC<LoaderAtomProps> = ({loading}) => {
  if (loading) {
    return (
      <View style={{paddingVertical: defaultDimensions.baseScale}}>
        <ActivityIndicator size={'large'} color={Colors.primaryCTA} />
      </View>
    );
  }
  return null;
};
