// CartPage.js
import React, { useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
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

const CartPage = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);

  const mergedCart = useMemo(() => mergeCartItems(cart), [cart]);

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const totalPrice = mergedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    const itemIndex = cart.findIndex(i => i.name === mergedCart[index].name);
    newCart[itemIndex].quantity += 1;
    updateCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    const itemIndex = cart.findIndex(i => i.name === mergedCart[index].name);
    if (newCart[itemIndex].quantity > 1) {
      newCart[itemIndex].quantity -= 1;
      updateCart(newCart);
    }
  };

  const removeItem = (index) => {
    const newCart = cart.filter(i => !(i.name === mergedCart[index].name));
    updateCart(newCart);
  };

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.title}>담은 목록</Text>
      <ScrollView style={styles.cartList}>
        {mergedCart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.indexText}>{index + 1}</Text>
            <Text style={styles.cartNameText}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(index)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.cartText}>{item.quantity}개</Text>
              <TouchableOpacity onPress={() => increaseQuantity(index)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cartText}>{item.price * item.quantity}원</Text>
            <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
              <Text style={styles.buttonText}>삭제</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.totalPrice}>총 금액: {totalPrice}원</Text>
      <Text style={styles.dama}>담아주신 목록은 다음과 같아요. 결제를 원하시면 결제하기를 눌러주세요.</Text>
      <View style={styles.cartButtonGroup}>
        <TouchableOpacity style={styles.cartLargeButton} onPress={() => navigation.navigate('OrderPage')}>
          <Text style={styles.buttonText}>뒤로 가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartLargeButton} onPress={() => navigation.navigate('PaymentPage')}>
          <Text style={styles.buttonText}>결제 하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartPage;











