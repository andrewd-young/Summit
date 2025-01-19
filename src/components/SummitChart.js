// SummitChart.js
import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import commonStyles from '../styles/commonStyles';

const SummitChart = () => {
  const data = {
    labels: ['January', '', 'March', '', 'May', '', 'July'], // Show every other month
    datasets: [
      {
        label: 'Debt',
        data: [65, 59, 80, 81, 56, 55, 40].map(value => isNaN(value) ? 0 : value), // Ensure no NaN values
        color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  console.log('Chart data:', data);

  const chartConfig = {
    backgroundGradientFrom: '#1e1e1e',
    backgroundGradientTo: '#1e1e1e',
    color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    formatYLabel: (value) => `$${parseFloat(value).toFixed(2)}`, // Ensure proper formatting
  };

  console.log('Chart data:', JSON.stringify(data, null, 2));

  const screenWidth = Dimensions.get('window').width;
  const cardPadding = 60; // Assuming 16 padding on each side

  return (
    <View>
      <View style={[commonStyles.card, { alignItems: 'center', justifyContent: 'center' }]}>
        <LineChart
          data={data}
          width={screenWidth - cardPadding} // Adjust width to fit inside the card padding
          height={180} // Adjusted height
          chartConfig={chartConfig}
          bezier
        />
      </View>
    </View>
  );
};

export default SummitChart;