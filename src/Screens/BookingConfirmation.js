import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function BookingConfirmation() {
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2DA22C',
            padding: 10,
          }}>
          <Text style={{fontSize: 19, fontFamily: 'aerial'}}>
            Booking Confirmation
          </Text>
        </View>

        <View
          style={{
            //   backgroundColor: 'grey',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            paddingTop: 20,
          }}>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            Thank you for booking appointment with
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>Mr XYZ</Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            The appointment schedule for
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            10 am on 30th April 2021
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '48%',
            marginTop: 10,
            flex: 1,
          }}>
          <Image
            style={{width: 350, height: 300}}
            source={require('../Images/QRCode.png')}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>XQY-PKS</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            flex: 1,
            marginBottom: 10,
          }}>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            Please save this code you have
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            provide this code to consultant in
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            order to confirm meeting
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            You can download payment receipt by
          </Text>
          <Text style={{fontFamily: 'aerial', fontSize: 20}}>
            visiting your order history page anytime
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});
