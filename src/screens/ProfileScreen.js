// filepath: /Users/jojiaraki/Summit/screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';

const SettingsScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [income, setIncome] = useState('');
  const [zip, setZip] = useState('');
  const [debt, setDebt] = useState('');

  return (
    <ScrollView style={[commonStyles.container]}>
      <Text style={commonStyles.title}>Profile</Text>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>First Name</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your first name"
          placeholderTextColor="#888"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>Last Name</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your last name"
          placeholderTextColor="#888"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>Email</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>Income</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your income"
          placeholderTextColor="#888"
          value={income}
          onChangeText={setIncome}
          keyboardType="decimal-pad"
        />
      </View>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>ZIP Code</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your ZIP code"
          placeholderTextColor="#888"
          value={zip}
          onChangeText={setZip}
          keyboardType="numeric"
        />
      </View>
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>Debt Amount</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your debt amount"
          placeholderTextColor="#888"
          value={debt}
          onChangeText={setDebt}
          keyboardType="decimal-pad"
        />
      </View>
    </ScrollView>
  );
};


export default SettingsScreen;