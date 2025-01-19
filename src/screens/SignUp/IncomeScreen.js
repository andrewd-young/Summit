import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const IncomeScreen = ({ navigation, route }) => {
  const { email, firstName, lastName } = route.params;
  const [income, setIncome] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {
    navigation.navigate('DebtScreen', { email, firstName, lastName, income, zip });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Income & ZIP Code</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Income"
        placeholderTextColor="#888"
        value={income}
        onChangeText={setIncome}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="ZIP Code"
        placeholderTextColor="#888"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default IncomeScreen;
