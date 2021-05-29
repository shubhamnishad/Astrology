import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const tarotArray = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];

export default function TarotConsultant() {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <View style={styles.tarotView}>
          <Text style={{paddingLeft: 10, fontSize: 19, fontFamily: 'aerial'}}>
            Tarot Consultant
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

      {/* <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={tarotArray}
        renderItem={(item) => <TarotFunc />}
      /> */}

      <ScrollView
        horizontal={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {tarotArray.length > 0 &&
          tarotArray.map((item) => {
            return <TarotFunc item={item} />;
          })}
      </ScrollView>
    </View>
  );
}

const TarotFunc = (props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 260,
        height: 180,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 17,
        },
        shadowOpacity: 0.58,
        shadowRadius: 17.0,
        elevation: 24,
      }}
      key={props.item.key}>
      <TouchableOpacity onPress={() => navigation.navigate('AstroDetails')}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderTopLeftRadius: 25,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '51%',
            }}>
            <Text style={{fontFamily: 'aerial', fontSize: 20}}>
              Tarot Expert
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'aerial',
                marginTop: 30,
              }}>
              Years of Exp: 9 years
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'aerial',
                paddingBottom: 20,
                paddingTop: 5,
              }}>
              Specialization: Corporate
            </Text>
          </View>
          <View
            style={{
              width: 127,
              height: 150,
              backgroundColor: '#FFEB3B',
              borderTopLeftRadius: 75,
              borderBottomLeftRadius: 75,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 20,
            }}>
            <View style={styles.photoView}>
              <Text>Photo</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 260,
            height: 35,
            backgroundColor: '#FFEB3B',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{fontSize: 20, fontFamily: 'aerial'}}>Verified</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tarotView: {
    width: '50%',
    height: 40,

    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFEB3B',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.58,
    shadowRadius: 17.0,
    elevation: 19,
  },
  viewAll: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
  photoView: {
    width: 127,
    height: 128,
    borderRadius: 128 / 2,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFEB3B',
    borderLeftWidth: 4,
  },
});
