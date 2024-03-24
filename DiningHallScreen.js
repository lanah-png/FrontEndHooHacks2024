import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Chips from './Chips';

export default function DiningHallScreen({ route }) {
  const { diningHall } = route.params;
  const navigation = useNavigation();

  const stations = diningHall.stations;

  const [visible, setVisible] = useState(stations.map(() => false));

  const toggleMenu = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.bannerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <ImageBackground source={{ uri: diningHall.image }} style={styles.banner}></ImageBackground>
      </View>
      <Text style={styles.title}>{diningHall.name}</Text>
      <Chips />
      {stations.map((station, index) => (
        <View key={index} style={styles.stationContainer}>
          <TouchableOpacity style={styles.stationNameContainer} onPress={() => toggleMenu(index)}>
            <Text style={styles.stationName}>{station.name}</Text>
            <Text style={styles.dropdownArrow}>{visible[index] ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {visible[index] && station.foods.map((food, foodIndex) => (
            <View key={foodIndex} style={styles.foodContainer}>
              <Text style={styles.foodText}>{food}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 100,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 18,
  },
  banner: {
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 50,
  },
  stationContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#0C1439',
    padding: 10,
    width: '100%',
  },
  stationNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stationName: {
    color: '#fff',
    fontSize: 18,
  },
  dropdownArrow: {
    color: '#fff',
    fontSize: 18,
  },
  foodContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    marginTop: 0,
    padding: 10,
  },
  foodText: {
    fontSize: 16,
  },
});
