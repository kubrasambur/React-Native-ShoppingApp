import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from "./Home.styles"

const Home = ({navigation}) => {
  function handlePressE() {
    navigation.navigate('ElectronicsPage');
  }
  function handlePressW() {
    navigation.navigate('Women');
  }
  function handlePressM() {
    navigation.navigate('Man');
  }
  function handlePressJ() {
    navigation.navigate('Jewelry');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={handlePressE} style={styles.item}>
        <Text style={styles.text}>Electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressW} style={styles.item}>
        <Text style={styles.text}>Women's Clothing</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={handlePressM} style={styles.item}>
        <Text style={styles.text}>Men's Clothing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressJ} style={styles.item}>
        <Text style={styles.text}>Jewelry</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Home;


