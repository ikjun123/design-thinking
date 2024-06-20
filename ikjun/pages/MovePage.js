//MovePage
import React, {useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function MovePage() { 
  const navigation = useNavigation(); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CompletePaymentPage'); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Text style={styles.Text}> 결제중입니다... </Text>
        <Text style={styles.Text}> 5초후에 완료창으로 </Text> 
        <Text style={styles.Text}> 넘어갑니다... </Text>
        <Text style={styles.Text}> 조금만 기다려주세요 </Text>
    </View>
  )};

  const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    }

  })