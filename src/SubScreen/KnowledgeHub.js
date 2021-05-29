import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function KnowledgeHub() {
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
            Knowledge Hub
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 5}}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            borderWidth: 1,
            borderColor: 'black',
            marginLeft: 10,
            marginTop: 5,
          }}></View>
        <View>
          <Text style={{marginLeft: 10, fontSize: 20, fontFamily: 'aerial'}}>
            Things can help you stay happy
          </Text>
          <Text style={{marginLeft: 13, fontSize: 15, fontFamily: 'aerial'}}>
            staying happy is always a good thing to do
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{backgroundColor: '#E9D92A', height: 5, width: 150}}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            borderWidth: 1,
            borderColor: 'black',
            marginLeft: 18,
            marginTop: 5,
          }}></View>
        <View>
          <Text style={{marginLeft: 10, fontSize: 20, fontFamily: 'aerial'}}>
            Things can help you stay happy
          </Text>
          <Text style={{marginLeft: 13, fontSize: 15, fontFamily: 'aerial'}}>
            staying happy is always a good thing to do
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  astroView: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFEB3B',
    marginTop: 30,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.58,
    shadowRadius: 17.0,
    elevation: 17,
  },
});
