//MainPage
import React,{ useCallback } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, Alert, View, Image, StatusBar } from 'react-native';
import 임영웅1 from "../assets/임영웅1.jpg";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AudioPlayer from './AudioPlayer';

export default function MainPage() { 
  const navigation = useNavigation(); 
  let soundRef = null; 

  useFocusEffect( 
    useCallback(() => {
      return () => {
        if (soundRef) {
          soundRef.stopAsync();
        }
      };
    }, [])
  );
  const handleSoundRef = (sound) => {  // 추가
    soundRef = sound;  // 추가
  };  // 추가
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        
        <View style={styles.balloonContainer}>
          <View style={styles.balloon}>
            <Text style={styles.maintext}>안녕하세요!</Text>
            <Text style={styles.maintext}>주문하시려면 </Text>
            <Text style={styles.maintext}> '안내 방식' </Text>
            <Text style={styles.maintext}> 버튼을 눌러주세요. </Text>
          </View>
          <View style={styles.triangle} />
        </View>
      </View>

      <Image source={임영웅1} style={styles.imageStyle} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GuidePage') }}>
          <Text style={styles.text}>안내방식</Text>
        </TouchableOpacity>
      </View>

      

      <AudioPlayer source={require('../assets/sounds/main.mp3')} onSoundRef={handleSoundRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  balloonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  balloon: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#007BFF',
    alignSelf: 'center',
  },
  maintext: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 8,
  },
  imageStyle: {
    width: "80%",
    height: "32%",
    resizeMode: 'contain',
  },
  audioImage: {
    width: 400,
    height: 50,
    resizeMode: 'contain',
  },
});




