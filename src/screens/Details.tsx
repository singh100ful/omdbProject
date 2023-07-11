import * as React from 'react';
import {Image, View} from 'react-native';
import {GenericNavigation} from '../navigation/AppNavigation';
import {baseUrl} from '../config/constants';
import axios from 'axios';
import {LoaderAtom} from '../components/atoms/LoaderAtom';
import {defaultDimensions} from '../theme/metrics';
import {TextAtom} from '../components/atoms/TextAtom';
import {SeparatorAtom} from '../components/atoms/SeparatorAtom';

interface DetailsProps extends GenericNavigation {}

export const Details: React.FC<DetailsProps> = ({route}) => {
  const [title, setTitle] = React.useState<TitleData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const data: MovieData = route?.params?.data;

  React.useEffect(() => {
    fetchTitle();
  }, []);

  const fetchTitle = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + `i=${data.imdbID}&plot=full`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      setTitle(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      {title ? (
        <View>
          <Image
            source={{uri: title?.Poster}}
            style={{width: defaultDimensions.screenWidth, height: 250}}
            resizeMode="cover"
          />
          <View
            style={{
              paddingHorizontal: defaultDimensions.baseScale,
              paddingVertical: defaultDimensions.smallScale,
            }}>
            <TextAtom text={title?.Title} preset="title" />
            <TextAtom text={title?.Year} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextAtom text="Ratings:" preset="bodyBold" />
              <TextAtom text={title?.imdbRating} />
            </View>
            <SeparatorAtom />
            <TextAtom text="Plot:" preset="bodyBold" />
            <TextAtom text={title?.Plot} />
          </View>
        </View>
      ) : (
        <LoaderAtom loading={loading} />
      )}
    </View>
  );
};
