import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

const data = [
  {
    id: 1,
    name: 'Comunity',
  },
  {
    id: 2,
    name: 'Housing',
  },
  {
    id: 3,
    name: 'Jobs',
  },
  {
    id: 4,
    name: 'Personal',
  },
  {
    id: 5,
    name: 'For sale',
  },
  {
    id: 6,
    name: 'For sale',
  },
  {
    id: 7,
    name: 'For sale',
  },
];
export default function ViewAll() {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 70,
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

        {data.map((item, i) => (
          <TouchableOpacity style={styles.card} key={i}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 70 / 2,
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Photo</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Mr XYZ</Text>
              <Text style={styles.count}>Vastu Specialist</Text>

              <Text style={styles.followButtonText}>25rs/min</Text>
            </View>
            <View style={{marginLeft: 60, marginTop: 5}}>
              <IconButton icon="star" size={28} color="black" />
              <Text style={{fontSize: 15, marginLeft: 10}}>5/5</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// const Body = item => {
//   return (
//     <View>
//       <View style={styles.card}>
//         <View
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: 70 / 2,
//             borderWidth: 1,
//             borderColor: 'black',
//             backgroundColor: 'white',
//             marginLeft: 10,
//           }}>
//           <Text>Photo</Text>
//         </View>
//         <View style={styles.cardContent}>
//           <Text style={styles.name}>Mr XYZ</Text>
//           <Text style={styles.count}>Vastu Specialist</Text>

//           <Text style={styles.followButtonText}>25rs/min</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#E9D92A',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.58,
    shadowRadius: 17.0,
    elevation: 24,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: 'black',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    color: 'black',
    fontFamily: 'aerial',
    fontSize: 15,
    marginLeft: 25,
  },
});
