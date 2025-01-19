import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../../styles/commonStyles';
import { initUser } from '../../lib/api';
import { useUserData } from '../../context/UserProvider';

const DebtScreen = ({ navigation, route }) => {
  const { setUser } = useUserData();
  const { email, firstName, lastName, income, zip } = route.params;
  const [debt, setDebt] = useState('');

  const handleFinish = async() => {
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
      <Text style={commonStyles.title}>Enter Your Debt Information</Text>
      <TextInput
        style={commonStyles.onboardingInput}
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
