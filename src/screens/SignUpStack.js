import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailScreen from './SignUp/EmailScreen';
import NameScreen from './SignUp/NameScreen';
import IncomeScreen from './SignUp/IncomeScreen';
import DebtScreen from './SignUp/DebtScreen';

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="EmailScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#121212' },
      }}
    >
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="IncomeScreen" component={IncomeScreen} />
      <Stack.Screen name="DebtScreen" component={DebtScreen} />
    </Stack.Navigator>
  );
};

export default SignUpStack;
