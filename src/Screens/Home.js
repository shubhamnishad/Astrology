import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IconButton, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Astrologer from '../SubScreen/Astrologer';
import TarotConsultant from '../SubScreen/TarotConsultant';
import KnowledgeHub from '../SubScreen/KnowledgeHub';

const imageArray = [
  {key: '1', uri: 'https://source.unsplash.com/1024x768/?buddha'},
  {key: '2', uri: 'https://source.unsplash.com/1024x768/?shiva'},
  {key: '3', uri: 'https://source.unsplash.com/1024x768/?goddess'},
  {key: '4', uri: 'https://source.unsplash.com/1024x768/?unicorn'},
];

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View
        style={{
          flex: 0.11,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontFamily: 'aerial',
              fontSize: 29,
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#E9D92A',
            }}>
            AstroWorld
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <IconButton
            icon="bell"
            size={26}
            color="black"
            onPress={() => alert('NOTIFICATIONS')}
          />
        </View>
      </View>

      <View style={{marginLeft: 10}}>
        <Text
          style={{
            fontFamily: 'aerial',
            fontSize: 22,
            textAlign: 'left',

            color: 'black',
          }}>
          Solution to all your problem{`\n`}is now at your fingertip
        </Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Searchbar
          style={{width: '90%', borderRadius: 20}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <ScrollView
        horizontal={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {imageArray.length > 0 &&
          imageArray.map((item) => {
            return <ImageComponent item={item} />;
          })}
      </ScrollView>

      <View>
        <Astrologer />
      </View>

      <View>
        <TarotConsultant />
      </View>

      <View>
        <KnowledgeHub />
      </View>
    </ScrollView>
  );
}

const ImageComponent = (props) => {
  // console.log('WWWWWWWWWWW', props.item.key);
  return (
    <View style={{paddingBottom: 5, marginTop: 10}} key={props.item.key}>
      <TouchableOpacity>
        <View
          style={{
            height: 200,
            margin: 5,
            borderRadius: 15,
            width: Dimensions.get('window').width - 20,
            marginTop: 15,
          }}>
          <Image
            source={{
              uri: props.item.uri,
            }}
            resizeMode="stretch"
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
