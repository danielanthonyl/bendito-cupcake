import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ReactNode } from 'react';

export interface ButtonProps extends TouchableOpacityProps {
  label?: string | ReactNode;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return <TouchableOpacity {...rest}>{label}</TouchableOpacity>;
};
