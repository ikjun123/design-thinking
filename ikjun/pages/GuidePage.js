//GuidePage
// GuidePage.js
import React, { useRef, useCallback, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AudioPlayer from './AudioPlayer'; // AudioPlayer 추가
import audio from "../assets/audio.jpg";
import bell from "../assets/bell.jpg";
import 매장이용 from "../assets/매장이용.jpg";
import 포장 from "../assets/포장.jpg";

const GuidePage = () => {
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

  const handleSoundRef = (sound) => {
    soundRef = sound;
  };

  const handleCallStaff = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5초 후에 메시지 사라짐
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.orderStage}>주문 단계 안내</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
            <Text style={styles.text}>뒤로</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmployeeCalledPage')}>
              <View style={styles.bells}>
                <Text style={styles.text}>직원 호출</Text>
                <Image source={bell} style={styles.imageStyle} />
              </View>
          </TouchableOpacity>
        </View>

        <View style={styles.middletext}>
          <Text style={styles.guidetext}>매장 이용을 원하시는</Text>
          <Text style={styles.guidetext}>고객님은 '매장 이용'을</Text>
          <Text style={styles.guidetext}>포장 주문을 원하시는</Text>
          <Text style={styles.guidetext}>고객님은 '포장 주문'을 눌러주세요</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderPage', { orderType: '매장 이용입니다.' })}>
            <Text style={styles.text}>매장 이용</Text>
            <Image source={매장이용} style={styles.cart} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderPage', { orderType: '포장 주문입니다.' })}>
            <Text style={styles.text}>포장 주문</Text>
            <Image source={포장} style={styles.cart} />
          </TouchableOpacity>
        </View>
      </View>

      <AudioPlayer source={require('../assets/sounds/guidepage.mp3')} onSoundRef={handleSoundRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 0.2,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 60,
    height: 55,
    marginLeft: 10,
  },
  orderStage: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 0,
    marginButton: 30
  },
  bells: {
    flexDirection: 'row',
  },
  callstaff: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  middle: {
    flex: 1.5,
  },
  cart: {
    width: 60,
    height: 55,
    marginLeft: 10,
  },
  middletext: {
    backgroundColor: '#007BFF',
    padding: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  guidetext: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 400,
    height: 50,
    resizeMode: 'contain'
  },
  messageContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  messageText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default GuidePage;
