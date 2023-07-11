import * as React from 'react';
import {FlatList, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../theme/colors';
import {defaultDimensions} from '../theme/metrics';
import axios from 'axios';
import {baseUrl} from '../config/constants';
import {SeparatorAtom} from '../components/atoms/SeparatorAtom';
import {LoaderAtom} from '../components/atoms/LoaderAtom';
import {MovieMolecule} from '../components/molecule/MovieMolecule';
import {GenericNavigation} from '../navigation/AppNavigation';
import {RouteKeys} from '../navigation/Routekeys';
import {EmptyMolecule} from '../components/molecule/EmptyMolecule';

interface HomeProps extends GenericNavigation {}

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState<MovieData[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchMovies = async (page: number = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + `s=${search}&page=${page}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      if (data?.length) {
        let temp = data;
        temp = temp.concat(res.data.Search);
        setData(temp);
      } else {
        setData(res.data.Search);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.primaryCTA,
          padding: defaultDimensions.mediumScale,
        }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.inputStyle}
          onSubmitEditing={() => fetchMovies()}
        />
      </View>
      <FlatList
        style={styles.listStyle}
        data={data}
        initialNumToRender={6}
        windowSize={11}
        keyExtractor={item => item.imdbID}
        ItemSeparatorComponent={() => <SeparatorAtom />}
        ListFooterComponent={() => {
          return <LoaderAtom loading={loading} />;
        }}
        ListEmptyComponent={() => <EmptyMolecule />}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate(RouteKeys.Details, {
                  data: item,
                })
              }>
              <MovieMolecule item={item} key={index} />
            </Pressable>
          );
        }}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          if (data.length) {
            const page = data.length / 10 + 1;
            fetchMovies(page);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginHorizontal: defaultDimensions.baseScale,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    borderRadius: defaultDimensions.mediumScale,
    padding: defaultDimensions.mediumScale,
  },
});
