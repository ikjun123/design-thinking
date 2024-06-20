//StackNavigator
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/MainPage';
import GuidePage from '../pages/GuidePage';
import PaymentPage from '../pages/PaymentPage';
import CashPage from '../pages/CashPage';
import CardPage from '../pages/CardPage';
import CompletePaymentPage from '../pages/CompletePaymentPage';
import OrderPage from '../pages/OrderPage';
import CartPage from '../pages/CartPage';
import DetailOrderPage from '../pages/DetailOrderPage';
import MovePage from '../pages/MovePage';
import EmployeeCalledPage from '../pages/EmployeeCalledPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
    const [cart, setCart] = useState([]);

    return (
        <Stack.Navigator
            initialRouteName="MainPage"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height: 100
                },
                headerTitleAlign: 'left',
                headerTintColor: "#000",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="GuidePage" component={GuidePage} />
            <Stack.Screen name="PaymentPage" component={PaymentPage} />
            <Stack.Screen name="CashPage">
                {props => <CashPage {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="CardPage">
                {props => <CardPage {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="CompletePaymentPage" component={CompletePaymentPage} />
            <Stack.Screen name="OrderPage" component={OrderPage} />
            <Stack.Screen name="CartPage">
                {props => <CartPage {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="DetailOrderPage">
                {props => <DetailOrderPage {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="MovePage" component={MovePage} />
            <Stack.Screen name="EmployeeCalledPage" component={EmployeeCalledPage} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
