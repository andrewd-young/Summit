import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
      <Text style={commonStyles.introscreentitle}>Enter Your Income & ZIP Code</Text>
      <View style ={{flexDirection: "column", gap: 20}}>
      <View style={commonStyles.fieldContainer}>
        <TextInput
          style={[commonStyles.onboardingInput, { height: 50 }]}
          placeholder="Income ($)"
          placeholderTextColor="#888"
          value={income}
          onChangeText={setIncome}
          keyboardType="decimal-pad"
        />
        <TextInput
          style={[commonStyles.onboardingInput, { height: 50, marginTop: 20 }]}
          placeholder="ZIP Code"
          placeholderTextColor="#888"
          value={zip}
          onChangeText={setZip}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={commonStyles.longWhiteButton} onPress={handleNext}>
        <Text style={commonStyles.blackText}>Next</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default IncomeScreen;