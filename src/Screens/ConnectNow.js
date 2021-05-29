import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

export default function ConnectNow(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 10}}>
            <IconButton
              icon="arrow-left"
              size={25}
              color="black"
              onPress={() => props.navigation.navigate('AstroDetails')}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 70,
            }}>
            <Text style={{fontSize: 19, fontFamily: 'aerial'}}>
              Payment Review
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'lightgrey',
            padding: 20,
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: '47%',
              height: 145,
              borderRadius: 15,
              borderWidth: 4,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'white',
            }}>
            <Text>Photo</Text>
          </View>
          <View style={{padding: 10, paddingTop: 40}}>
            <Text style={{fontFamily: 'aerial', fontSize: 20}}>Mr XYZ</Text>
            <Text style={{fontFamily: 'aerial', fontSize: 17, color: 'orange'}}>
              Saturday, 10 November
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <View
            style={{
              marginTop: 10,
              width: '100%',
              justifyContent: 'flex-start',
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 17}}>Booking Details</Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: '93%',
                height: 130,
                marginTop: 5,
                borderRadius: 15,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '37%',
                  height: 130,
                  backgroundColor: 'orange',
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                }}></View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  width: 170,
                }}>
                <Text style={{fontSize: 16, fontFamily: 'aerial'}}>
                  1 Session : 30 min
                </Text>
              </View>
              <View
                style={{
                  width: '15%',
                  height: 130,
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopRightRadius: 15,
                    borderLeftWidth: 1,
                  }}>
                  <IconButton
                    icon="plus"
                    size={35}
                    color="black"
                    onPress={() => console.log('ps')}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomRightRadius: 15,
                    borderLeftWidth: 1,
                    borderTopWidth: 1,
                  }}>
                  <IconButton
                    icon="minus"
                    size={35}
                    color="black"
                    onPress={() => console.log('ps')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              justifyContent: 'flex-start',
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 17}}>Coupon Code</Text>

            <View
              style={{
                marginTop: 5,
                borderWidth: 1,
                width: '93%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'lightgrey',
                borderRadius: 15,
              }}>
              <TextInput
                style={{width: 220}}
                placeholder="Have a coupon code ?"
              />
              <TouchableOpacity s>
                <Text style={{color: 'orange', paddingRight: 40, fontSize: 18}}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              justifyContent: 'flex-start',
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 17}}>Personal Details</Text>

            <View
              style={{
                marginTop: 5,
                borderWidth: 1,
                width: '93%',
                flexDirection: 'row',
                alignItems: 'center',

                borderColor: 'lightgrey',
                borderRadius: 15,
              }}>
              <View style={{borderRadius: 15}}>
                <IconButton
                  icon="cellphone"
                  size={25}
                  color="grey"
                  onPress={() => console.log('ps')}
                />
              </View>
              <View>
                <TextInput
                  style={{width: 280, paddingLeft: 10}}
                  placeholder="Phone"
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
                borderWidth: 1,
                width: '93%',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'lightgrey',
                borderRadius: 15,
              }}>
              <View style={{borderRadius: 15}}>
                <IconButton
                  icon="email-outline"
                  size={25}
                  color="grey"
                  onPress={() => console.log('ps')}
                />
              </View>
              <View>
                <TextInput
                  style={{width: 280, paddingLeft: 10}}
                  placeholder="Email"
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'lightgrey',
            width: '100%',
            height: 4,
            marginTop: 50,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            justifyContent: 'space-between',
            paddingBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                paddingLeft: 22,
                color: 'orange',
              }}>
              INR 245
            </Text>
            <Text style={{paddingLeft: 21}}>Total payable amount </Text>
          </View>

          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              backgroundColor: 'orange',
              marginRight: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('BookingConfirmation')}>
            <Text style={{fontSize: 18}}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
