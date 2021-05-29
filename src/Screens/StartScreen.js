import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function StartScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        source={require('../Images/Mountain.jpg')}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'b',
          }}>
          <View
            style={{
              marginTop: 10,
              marginBottom: 40,
            }}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontSize: 42,
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#FFEB3B',
              }}>
              AstroWorld
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFEB3B',
              width: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '5%',
            }}
            onPress={() => props.navigation.navigate('Home')}>
            <Text style={{fontFamily: 'aerial', fontSize: 16}}>
              Explore Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFEB3B',
              width: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '5%',
              marginTop: 40,
            }}>
            <Text style={{fontFamily: 'aerial', fontSize: 16}}>
              Daily Updates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFEB3B',
              width: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '5%',
              marginTop: 40,
            }}>
            <Text style={{fontFamily: 'aerial', fontSize: 16}}>Astro Cart</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 50,
            }}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontSize: 27,
                textAlign: 'left',
                fontWeight: 'bold',
                color: 'white',
              }}>
              A one stop Solution{`\n`}for all your Problems
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
