import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        source={require('../Images/Mountain.jpg')}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.symbolView}>
            <Text style={{color: 'white'}}>Symbol</Text>
          </View>
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={styles.subView}>
            <View style={styles.inputView}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Icon style={{marginTop: 10}} name="envelope" size={25} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#003f5c"
                  multiline={true}
                />
              </View>
            </View>
            <View style={styles.passView}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Icon style={{marginTop: 10}} name="key" size={25} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor="#003f5c"
                  multiline={true}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => props.navigation.navigate('StartScreen')}>
              <Text style={styles.loginText}>SIGN IN</Text>
            </TouchableOpacity>
            <Pressable
              style={{marginTop: 20, marginBottom: 20}}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={{color: 'white', fontSize: 15}}>
                Don't have an account? <Text>Sign Up</Text>
              </Text>
            </Pressable>
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
  inputView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    padding: 20,
    marginTop: 60,
    borderWidth: 1,
    borderColor: '#FFEB3B',
  },
  passView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    // marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#FFEB3B',
  },
  inputText: {
    height: 50,
    color: 'black',
    width: '85%',
    paddingLeft: 10,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '85%',
    backgroundColor: '#FFEB3B',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
    fontFamily: 'aerial',
    fontSize: 17,
  },

  subView: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: '#FFEB3B',
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(53, 53, 53, 0.6)',
  },
  symbolView: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
