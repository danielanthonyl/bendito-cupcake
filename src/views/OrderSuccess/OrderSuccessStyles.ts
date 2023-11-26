import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const OrderSuccessStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 20,
  },
  title: { fontWeight: 'bold' },
  svgIcon: { opacity: 0.6 },
  buttonWrapper: { marginTop: 'auto' },
  button: {
    backgroundColor: Colors.softBlue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingVertical: 12,
    marginBottom: 100,
  },
  buttonLabel: { fontWeight: '600' },
});
