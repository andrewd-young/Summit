import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  card: {
    backgroundColor: '#1e1e1e',
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
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
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
    backgroundColor: '#ffffff',
    marginHorizontal: 2,
  },
  incompleteLine: {
    backgroundColor: '#333333',
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
    color: '#808080',
  },
  amount: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ffffff',
  },
  infoContainer: {
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  infoValue: {
    fontSize: 16,
    color: '#ffffff',
  },
  plusButton: {
    position: "absolute",
    bottom: 70,
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
    backgroundColor: '#1e1e1e',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  navItem: {
    padding: 8,
    color: '#ffffff',
  },
  smallCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  smallCard: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    width: 170,
    height: 100,
  },
  // Updated debt card styles
  debtCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    width: '100%',
    height: 80,
    marginTop: 20,
    padding: 16,
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  debtCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  debtCardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
  debtCardAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  debtCardDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  editButton: {
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#1e1e1e',
  }
});

export default commonStyles;