import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    padding: 16,
  },
  card: {
    backgroundColor: '#1e1e1e', // Dark card background
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff', // Light text color
  },
  stepsContainer: {
    marginVertical: 20,
  },
  steps: {
    flexDirection: 'row',
    height: 40,
  },
  step: {
    flex: 1,
    height: 8,
    backgroundColor: '#ffffff', // Light step color
    marginHorizontal: 2,
  },
  incompleteLine: {
    backgroundColor: '#333333', // Dark incomplete line
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentBlock: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080', // Gray text color
  },
  amount: {
    fontSize: 40, // Increased font size
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ffffff', // Light text color
  },
  infoContainer: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff', // Light text color
  },
  infoValue: {
    fontSize: 16,
    color: '#ffffff', // Light text color
  },
  plusButton: {
    position: "absolute",
    bottom: 70, // Move it up to be above the tab bar
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e1e1e', // Dark navbar background
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#333333', // Dark border color
  },
  navItem: {
    padding: 8,
    color: '#ffffff', // Light text color
  },
  smallCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures cards are on opposite sides
    marginTop: 20,
  },
  smallCard: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    width: 170, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  editButton: {
    marginTop: 20,
  }
});

export default commonStyles;