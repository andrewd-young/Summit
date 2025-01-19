import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const IncomeScreen = ({ navigation, route }) => {
  const { email, firstName, lastName } = route.params;
  const [income, setIncome] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {

    if (income === '' || zip === '') {
      Alert.alert('Please enter your income and ZIP code');
      return;
    }

    if (zip.length !== 5) {
      Alert.alert('Please enter a valid ZIP code');
      return
    }
    navigation.navigate('DebtScreen', { email, firstName, lastName, income, zip });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Income & ZIP Code</Text>
      <View style ={{flexDirection: "column", gap: 20}}>

      <View style={styles.fieldContainer}>
        <Text style={{ color: "white" }}>＄</Text>
        <TextInput
          style={commonStyles.onboardingInput}
          placeholder="Income"
          placeholderTextColor="#888"
          value={income}
          onChangeText={setIncome}
          keyboardType="decimal-pad"
        />
      </View>
      <View>
      <TextInput
        style={commonStyles.onboardingInput}
        placeholder="ZIP Code"
        placeholderTextColor="#888"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
      />
      </View>
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
})

export default IncomeScreen;
