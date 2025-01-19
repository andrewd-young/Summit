import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const EmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Add validation if needed
    navigation.navigate('NameScreen', { email });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Enter Your Email</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default EmailScreen;
