import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNetInfo} from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

export default function Shop() {
  const netInfo = useNetInfo();
  console.log('!!!!!!!!!!!!', netInfo.isConnected);

  const ActivityIndicatorElement = () => {
    return (
      <View
        style={{
          height: '100%',
        }}>
        <ActivityIndicator
          color="red"
          size="large"
          style={styles.activityIndicatorStyle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {netInfo.isConnected ? (
        <WebView
          source={{uri: 'https://uditsolutions.in/'}}
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          //View to show while loading the webpage
          renderLoading={ActivityIndicatorElement}
          //Want to show the view or not
          startInLoadingState={true}
          androidHardwareAccelerationDisabled={true}
        />
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 22}}>No Internet !</Text>
        </View>
      )}

      {netInfo.isConnected == false
        ? Snackbar.show({
            text: 'No Inernet !',
            duration: Snackbar.LENGTH_LONG,
          })
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
