import { TextInput, TextInputProps, View } from 'react-native';
import { InputStyles } from './InputStyles';
import { Colors } from '../../constants/colors';
import { IconProps } from 'phosphor-react-native';

export interface InputProps extends TextInputProps {
  suffix?({ weight, color, size, style, mirrored }: IconProps): JSX.Element;
}

export const Input = ({ suffix: Suffix, ...rest }: InputProps) => {
  return (
    <View style={InputStyles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.mediumBlue}
        {...rest}
        style={[rest.style, InputStyles.input]}
      />
      {Suffix ? (
        <Suffix style={InputStyles.suffix} color={Colors.blue} weight="bold" />
      ) : null}
    </View>
  );
};
