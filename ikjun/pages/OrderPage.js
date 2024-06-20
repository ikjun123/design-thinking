//OrderPage
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { CartContext } from '../context/CartContext';
import { useFocusEffect } from '@react-navigation/native';
import EmployeeCalledPage from '../pages/EmployeeCalledPage';

const items = [
  {
    category: '음료',
    items: [
      { name: '아메리카노', price: 3000, image: require('../assets/americano.jpg') },
      { name: '카페 라떼', price: 4000, image: require('../assets/latte.jpg') },
      { name: '녹차 라떼', price: 4500, image: require('../assets/greentea.jpg') },
      { name: '홍차', price: 3500, image: require('../assets/blacktea.jpg') },
      { name: '블루베리 스무디', price: 5000, image: require('../assets/blueberry.jpg') },
      { name: '요거트 스무디', price: 5000, image: require('../assets/yogurt.jpg') },
    ],
  },
  {
    category: '먹거리',
    items: [
      { name: '뉴욕 치즈 케이크', price: 7000, image: require('../assets/cheesecake.jpg') },
      { name: '브라우니', price: 5000, image: require('../assets/brownie.jpg') },
      { name: '소금빵', price: 3000, image: require('../assets/saltbread.jpg') },
      { name: '마들렌', price: 3500, image: require('../assets/madeleine.jpg') },
      { name: '크로와상', price: 3500, image: require('../assets/croissant.jpg') },
      { name: '허니브레드', price: 6000, image: require('../assets/honeybread.jpg') },
    ],
  },
];

const OrderPage = ({ navigation, route }) => {
  const { cart, setCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('음료');
  const [orderType, setOrderType] = useState('');
  const [showMessage, setShowMessage] = useState(false);
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

  useEffect(() => {
    if (route.params?.orderType) {
      setOrderType(route.params.orderType);
    }
  }, [route.params?.orderType]);

  const categories = items.map(item => item.category);

  return (
    <View style={styles.container}>
      <View style={styles.sideMenu}>
        <TouchableOpacity
          style={[styles.sideButton, styles.backButton]}
          onPress={() => navigation.navigate('GuidePage')}
        >
          <Text style={styles.sideButtonText}>뒤로</Text>
        </TouchableOpacity>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.sideButton, selectedCategory === category && styles.selectedSideButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.sideButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.orderTypeText}>{orderType}</Text>
        <ScrollView style={styles.itemScroll}>
          {items
            .filter(category => category.category === selectedCategory)
            .map((category, index) => (
              <View key={index} style={styles.categoryContainer}>
                {category.items.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate('DetailOrderPage', { item: { ...item, category: selectedCategory }, cart, setCart })}
                  >
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.itemName}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
        </ScrollView>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.largeButton} onPress={() => navigation.navigate('CartPage')}>
            <Text style={styles.textDetail}>🛒담은 목록</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={() => navigation.navigate('PaymentPage')}>
            <Text style={styles.textDetail}>📋결제 하기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.callbuttonOrder} onPress={() => navigation.navigate('EmployeeCalledPage')}>
          <Text style={styles.callstaffDetail}>직원 호출</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderPage;



