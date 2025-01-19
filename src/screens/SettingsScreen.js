import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';

const SettingsScreen = ({ route }) => {
  const { firstName, lastName, email, income, zip, debt } = route.params;

  return (
    <ScrollView style={[commonStyles.container]}>
      <Text style={commonStyles.title}>Profile Information</Text>

      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>Name: </Text>
          {firstName} {lastName}
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>Email: </Text>
          {email}
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>Income: </Text>
          ${income}
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>ZIP Code: </Text>
          {zip}
        </Text>

        <Text style={styles.header}>Debt Information</Text>
        <Text style={styles.profileText}>
          <Text style={styles.boldText}>Debt Amount: </Text>
          ${debt}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 20,
  },
  profileText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SettingsScreen;