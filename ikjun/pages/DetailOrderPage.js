//DetailOrderPage
import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CartContext } from '../context/CartContext';

const DetailOrderPage = ({ navigation, route }) => {
  const { cart, setCart } = useContext(CartContext);
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [temperature, setTemperature] = useState('따듯하게');

  const addToCart = () => {
    setCart([...cart, { ...item, quantity, temperature }]);
    navigation.navigate('OrderPage');
  };

  const addToCartAndGoToCartPage = () => {
    setCart([...cart, { ...item, quantity, temperature }]);
    navigation.navigate('CartPage');
  };

  const handleCallStaff = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5초 후에 메시지 사라짐
  };

  const isDrink = item.category === '음료';
  const isHot = item.name === '아메리카노' || item.name === '카페 라떼' || item.name === '녹차 라떼' || item.name === '홍차';

  return (
    <View style={styles.orderContainerDetail}>
      <TouchableOpacity
        style={styles.backbuttonDetail2}
        onPress={() => navigation.navigate('OrderPage')}
      >
        <Text style={styles.backButtonTextDetail}>뒤로</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.callbuttonOrder} onPress={() => navigation.navigate('EmployeeCalledPage')}>
          <Text style={styles.callstaffDetail}>직원 호출</Text>
        </TouchableOpacity>
      <Image source={item.image} style={styles.largeImageDetail} />
      <View style={styles.orderDetailsContainerDetail}>
        <Text style={styles.itemNameDetail}>{item.name}</Text>
        {isDrink && isHot && (
          <View style={styles.temperatureGroup}>
            <TouchableOpacity
              style={[styles.temperatureButton, temperature === '차갑게' && styles.selectedButton]}
              onPress={() => setTemperature('차갑게')}
            >
              <Text style={styles.selectedButtonTextDetail}>❄️차갑게</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.temperatureButton, temperature === '따듯하게' && styles.selectedButtonHot]}
              onPress={() => setTemperature('따듯하게')}
            >
              <Text style={styles.selectedButtonTextDetail}>♨️따듯하게</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.quantityContainerDetail}>
          <Text style={styles.quantityTextDetail}>개수 :</Text>
          <TouchableOpacity style={styles.quantityButtonDetail} onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Text style={styles.quantityTextDetail}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityTextDetail}>{quantity} 개</Text>
          <TouchableOpacity style={styles.quantityButtonDetail} onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.quantityTextDetail}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.priceTextDetail}>가격 : {item.price * quantity} 원</Text>
        <View style={styles.orderButtonGroupDetail}>
          <TouchableOpacity style={styles.orderLargeButtonDetail} onPress={addToCartAndGoToCartPage}>
            <Text style={styles.buttonTextDetail}>📋결제하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderLargeButtonDetail} onPress={addToCart}>
            <Text style={styles.buttonTextDetail}>🛒주문 담기</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default DetailOrderPage;
