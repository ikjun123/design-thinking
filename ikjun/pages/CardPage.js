//CardPage
import React, { useContext, useEffect, useMemo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';

const mergeCartItems = (cart) => {
  const merged = [];
  cart.forEach(item => {
    const existingItem = merged.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      merged.push({ ...item });
    }
  });
  return merged;
};

const CardPage = ({ navigation }) => {
  const { cart } = useContext(CartContext);

  const mergedCart = useMemo(() => mergeCartItems(cart), [cart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MovePage'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const calculateTotal = () => {
    return mergedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카드 결제 안내</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.table}>
          {mergedCart.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{index + 1}</Text>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.quantity} 개</Text>
              <Text style={styles.tableCell}>{item.price * item.quantity} 원</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.total}>총 금액: {total} 원</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    width: '100%',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 20, // 행의 높이를 넓힘
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10, // 수직 여백만 적용
    textAlign: 'center',
    fontSize: 18, // 글씨 크기를 키움
  },
  total: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default CardPage;
