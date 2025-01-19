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
  const principal = 100000; // Example principal amount
  const annualInterestRate = 5; // Example annual interest rate (5%)
  const loanTerm = 30; // Example loan term (30 years)

  const dataPoints = calculateRemainingLoanAmount(principal, annualInterestRate, loanTerm);

  // Filter labels to show every 12th payment number (one per year)
  const filteredLabels = dataPoints.map((point, index) => (index % 36 === 0 ? point.paymentNumber.toString() : ''));

  const data = {
    labels: filteredLabels, // X-axis labels (filtered payment numbers)
    datasets: [
      {
        label: 'Percentage Paid Off',
        data: dataPoints.map(point => point.percentPaidOff), // Y-axis data (percentage paid off)
        color: (opacity = 1) => `#ffffff`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View style={commonStyles.chartContainer}>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#1e2923',
          backgroundGradientFrom: '#08130D',
          backgroundGradientTo: '#08130D',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '2',
            strokeWidth: '1.5',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default SummitChart;