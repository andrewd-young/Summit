import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import commonStyles from '../../styles/commonStyles';

const NameScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    if (firstName === '' || lastName === '') {
      Alert.alert('Please enter your first and last name');
      return;
    }
    navigation.navigate('IncomeScreen', { email, firstName, lastName });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 100 }}>
      <View style={commonStyles.container}>
        <Text style={commonStyles.introscreentitle}>Enter Your Name</Text>
        <View style={commonStyles.inputContainer}>
          <TextInput
            style={commonStyles.onboardingInput}
            placeholder="First Name"
            placeholderTextColor="#888"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={commonStyles.onboardingInput}
            placeholder="Last Name"
            placeholderTextColor="#888"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <TouchableOpacity style={commonStyles.longWhiteButton} onPress={handleNext}>
          <Text style={commonStyles.blackText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NameScreen;
