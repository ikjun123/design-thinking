//EmployeeCalledPage
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCalledPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000); // 5초 후에 이전 화면으로 자동 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>직원이 오고있습니다.</Text>
      <Text style={styles.text}>조금만 기다려주세요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign:'center',
  }
});

export default EmployeeCalledPage;
