//CompletePaymentPage
import React, { useEffect, useCallback, useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import 임영웅1 from "../assets/임영웅1.jpg";
import AudioPlayer from './AudioPlayer';
import { CartContext } from '../context/CartContext';

const CompletePaymentPage = ({ navigation }) => {
  let soundRef = null;  
  const { setCart } = useContext(CartContext); // CartContext에서 setCart 가져오기

  useFocusEffect(  
    useCallback(() => {  
      return () => {  
        if (soundRef) {  
          soundRef.stopAsync();  
        }  
      };  
    }, [])  
  );  
  const handleSoundRef = (sound) => {
    soundRef = sound;
  }; 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MainPage'); 
    }, 16000);

    setCart([]);

    return () => clearTimeout(timer); 
  }, [navigation, setCart]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        
        <View style={styles.balloonContainer}>
          <View style={styles.balloon}>
            <Text style={styles.maintext}>주문이 완료되었습니다.</Text>
            <Text style={styles.maintext}>영수증을 챙겨주시고 주문 번호가 호출되면 </Text>
            <Text style={styles.maintext}>카운터에서 메뉴를 찾아가주세요</Text>
            <Text style={styles.maintext}>감사합니다. </Text>
          </View>
          <View style={styles.triangle} />
        </View>
      </View>

      <Image style={styles.image} source={임영웅1} />

      <View style={styles.audioPlayerWrapper}>
        <AudioPlayer source={require('../assets/sounds/complete.mp3')} onSoundRef={handleSoundRef} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageBox: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 50,  
  },
  messageText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
    marginBottom: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    marginVertical: 20,
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  audioPlayerWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
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
    marginBottom: 0,
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  messageBox: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 50,  
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    marginVertical:60,
    width: 200,
    height: 270,
    resizeMode: 'contain',
    marginTop:0
  },
  audioImage: {
    width: 400,
    height: 50,
    resizeMode: 'contain',
  }
});

export default CompletePaymentPage;
