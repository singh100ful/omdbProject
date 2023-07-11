import * as React from 'react';
import {Image, View} from 'react-native';
import {defaultDimensions} from '../../theme/metrics';
import {TextAtom} from '../atoms/TextAtom';

interface MovieMoleculeProps {
  item: MovieData;
}

export const MovieMolecule: React.FC<MovieMoleculeProps> = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <Image source={{uri: item.Poster}} style={{width: 100, height: 100}} />
      <View style={{paddingLeft: defaultDimensions.mediumScale}}>
        <TextAtom text={item.Title} preset="title" />
        <TextAtom text={item.Year} />
      </View>
    </View>
  );
};
