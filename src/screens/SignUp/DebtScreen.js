import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const DebtScreen = ({ navigation, route }) => {
  const { email, firstName, lastName, income, zip } = route.params;
  const [debt, setDebt] = useState('');

  const handleFinish = () => {
    // Handle form submission or navigate to Home
    console.log({ email, firstName, lastName, income, zip, debt });
    navigation.replace('Home');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Debt Information</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Debt Amount"
        placeholderTextColor="#888"
        value={debt}
        onChangeText={setDebt}
        keyboardType="decimal-pad"
      />
      <Button title="Finish" onPress={handleFinish} />
    </View>
  );
};

export default DebtScreen;
