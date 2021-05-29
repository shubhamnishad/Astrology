import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const astroArray = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
];

export default function Astrologer() {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <View style={styles.astroView}>
          <Text style={{paddingLeft: 10, fontSize: 19, fontFamily: 'aerial'}}>
            Astrologer
          </Text>
        </View>
        <View style={styles.viewAll}>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 21,
                fontFamily: 'aerial',
                color: 'green',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={astroArray}
        renderItem={(item) => <AstroFunc />}
      /> */}
      <ScrollView
        horizontal={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {astroArray.length > 0 &&
          astroArray.map((item) => {
            return <AstroFunc item={item} />;
          })}
      </ScrollView>
    </View>
  );
}

const AstroFunc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.photoCont}>
      <TouchableOpacity onPress={() => navigation.navigate('AstroDetails')}>
        <View style={styles.photoView}>
          <Text style={{fontFamily: 'aerial'}}>Photo</Text>
        </View>
        <View style={styles.photoNameView}>
          <Text style={{fontFamily: 'aerial'}}>XYZ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  astroView: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFEB3B',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.58,
    shadowRadius: 17.0,
    elevation: 24,
  },
  viewAll: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
  photoCont: {
    width: 190,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  photoView: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#FFEB3B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.58,
    shadowRadius: 17.0,
    elevation: 50,
  },
  photoNameView: {
    width: 140,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});
