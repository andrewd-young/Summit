// SummitChart.js
import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import commonStyles from '../styles/commonStyles';

function calculateRemainingLoanAmount(principal, annualInterestRate, loanTerm) {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numberOfPayments = loanTerm * 12;

  // Calculate monthly payment
  const monthlyPayment =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  let remainingBalance = principal;
  const dataPoints = [];

  for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;

    // Calculate percentage of principal paid off
    const percentPaidOff = ((principal - remainingBalance) / principal) * 100;
    dataPoints.push({ paymentNumber, percentPaidOff });
  }

  return dataPoints;
}



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