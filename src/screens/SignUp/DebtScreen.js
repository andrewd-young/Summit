import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from '../../styles/commonStyles';
import { initUser } from '../../lib/api';
import { useUserData } from '../../context/UserProvider';

const DebtScreen = ({ navigation, route }) => {
  const { setUser } = useUserData();
  const { email, firstName, lastName, income, zip } = route.params;
  const [debt, setDebt] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const handleFinish = async () => {
    // Handle form submission or navigate to Home
    // console.log({ email, firstName, lastName, income, zip, debt });
    const response = await initUser(firstName, lastName, email.toLowerCase(), income, debt, zip);
    if (response.status === 201) {
      setUser(response.data.data);
      navigation.replace('Main');
    } else {
      console.error("User creation failed");
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.introscreentitle}>Enter Your Debt Information</Text>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <TextInput
         style={[commonStyles.onboardingInput, { height: 50, marginTop: 20 }]}
        placeholder="Debt Amount ($)"
        placeholderTextColor="#888"
        value={debt}
        onChangeText={setDebt}
        keyboardType="decimal-pad"
      />
      <TextInput
         style={[commonStyles.onboardingInput, { height: 50, marginTop: 20 }]}
        placeholder="Interest Rate (%)"
        placeholderTextColor="#888"
        value={interestRate}
        onChangeText={setInterestRate}
        keyboardType="decimal-pad"
      />
        </View>
      <TouchableOpacity style={commonStyles.longWhiteButton} onPress={handleFinish}>
        <Text style={commonStyles.blackText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DebtScreen;