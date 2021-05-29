import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import {IconButton} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const images = [
  'https://source.unsplash.com/1024x768/?man',
  'https://source.unsplash.com/1024x768/?women',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?boy',
];

export default function AstroDetails(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    // console.warn('A time has been picked: ', time);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 40,
          width: '100%',
          position: 'absolute',
          top: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          zIndex: 1,
        }}>
        <IconButton
          icon="arrow-left"
          size={35}
          color="#607D8B"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <IconButton
          icon="dots-vertical"
          size={35}
          color="#607D8B"
          onPress={() => {
            console.log('dot-vertical');
          }}
        />
      </View>

      <View
        style={{
          height: '42%',
          position: 'relative',
        }}>
        <SliderBox
          images={images}
          // disableOnPress

          autoplay
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          sliderBoxHeight={420}
          resizeMethod={'resize'}
          resizeMode={'stretch'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 50,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
        />
      </View>

      <View
        style={{
          height: '70%',
          width: '100%',
          position: 'absolute',
          top: '35.5%',
          elevation: 10,
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingBottom: 10,
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 20,
            padding: 5,
          }}>
          <Text style={{paddingLeft: 30, fontFamily: 'aerial', fontSize: 20}}>
            Mr XYZ
          </Text>
          <Text
            style={{
              paddingLeft: 30,
              fontFamily: 'aerial',
              fontSize: 16,
              color: 'grey',
            }}>
            Tarot Expert
          </Text>
          <Text
            style={{
              paddingLeft: 30,
              fontFamily: 'aerial',
              fontSize: 16,
            }}>
            Sample introduction text
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 40,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#E4D234',
                fontSize: 15,
                fontFamily: 'aerial',
                paddingRight: 25,
              }}>
              Read More
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 15,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View>
            <Text style={{paddingLeft: 30, fontSize: 17, marginTop: 10}}>
              Year of Exp : 9
            </Text>
          </View>
          <TouchableOpacity onPress={showDatePicker}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#FFEB3B',
                width: 170,
                height: 40,
                marginRight: 20,
                flexDirection: 'row',

                alignItems: 'center',
              }}>
              <IconButton icon="calendar" size={25} color="black" />
              <Text style={{fontFamily: 'aerial', fontSize: 15}}>
                Book Slot
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            flex: 0.5,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15, fontFamily: 'aerial', paddingLeft: 28}}>
            Specialization
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // marginTop: 5,
            flex: 0.5,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: '25%',
              height: '120%',
              marginLeft: 10,
              marginRight: 10,
            }}></View>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: '25%',
              height: '120%',
              marginLeft: 10,
              marginRight: 10,
            }}></View>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: '25%',
              height: '120%',
              marginLeft: 10,
              marginRight: 10,
            }}></View>
        </View>

        <View
          style={{
            flex: 0.05,
            backgroundColor: 'lightgrey',
            width: '100%',
            marginTop: 15,
          }}></View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                paddingLeft: 22,
                color: '#FFEB3B',
              }}>
              INR 245/Min
            </Text>
            <Text style={{paddingLeft: 21}}>54 people have been guided </Text>
          </View>

          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              backgroundColor: '#FFEB3B',
              marginRight: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('ConnectNow')}>
            <Text style={{fontSize: 18}}>Connect Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
