//PaymentPage
import React, {useCallback} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import audio from "../assets/audio.jpg";
import bell from "../assets/bell.jpg";
import 현금 from "../assets/현금.jpg";
import 카드 from "../assets/카드.jpg";
import AudioPlayer from './AudioPlayer';

//조익준
export default  PaymentPage = () => {
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


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.orderStage}>결제 단계 안내</Text>
      </View>

      <View style={styles.middle}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderPage')}>
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
          <Text style={styles.guidetext}>현금 결제를 원하시는  </Text>
          <Text style={styles.guidetext}>고객님은 '현금 결제'를 </Text>
          <Text style={styles.guidetext}>카드 결제을 원하시는 </Text>
          <Text style={styles.guidetext}>고객님은 '카드 결제'를 눌러주세요</Text>
        </View>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CashPage')}>
              <Text style={styles.text}>현금 결제</Text>
              <Image source={현금} style={styles.cart} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CardPage')}>
              <Text style={styles.text}>카드 결제</Text>
              <Image source={카드} style={styles.cart} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
      <AudioPlayer source={require('../assets/sounds/payment.mp3')} onSoundRef={handleSoundRef} />
      </View>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top:{
    flex:0.1 ,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 60,
    height: 55,
    marginLeft:10,
  },
  orderStage:{
    fontWeight: 'bold', 
    fontSize: 50,
    marginTop:0,
    marginButton:30
  },
  bells:{
    flexDirection: 'row',
  },
  callstaff:{
    textAlign: 'center',
    fontWeight:'bold',
    color: '#fff',
  },
  middle:{
    flex:0.8,
  },
  cart:{
    width: 60,
    height: 55,
    marginLeft:10,
  },
  middletext:{
    backgroundColor: '#007BFF',
    padding:30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
  },
  guidetext:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom:10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10
  },
  button:{
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text:{
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottom:{
    flex:0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width:400,
    height:50,
    resizeMode:'contain'
  }

});
