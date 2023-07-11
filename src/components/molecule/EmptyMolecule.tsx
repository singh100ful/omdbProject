import * as React from 'react';
import {View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';

interface EmptyMoleculeProps {}

export const EmptyMolecule: React.FC<EmptyMoleculeProps> = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextAtom
        text="Type in here to search some movies"
        preset="title"
        style={{textAlign: 'center'}}
      />
    </View>
  );
};
