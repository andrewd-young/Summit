import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const NameScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    navigation.navigate('IncomeScreen', { email, firstName, lastName });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Name</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="First Name"
        placeholderTextColor="#888"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Last Name"
        placeholderTextColor="#888"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default NameScreen;
