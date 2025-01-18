import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../styles/commonStyles';

const SettingsScreen = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;