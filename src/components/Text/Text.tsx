import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  fontSize?: number;
  underline?: boolean;
}

export const Text = ({ children, fontSize, underline, ...rest }: TextProps) => {
  return (
    <RNText
      {...rest}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          fontSize,
          textDecorationLine: underline ? 'underline' : 'none',
          color: 'black',
          opacity: 0.85,
        },
        rest.style,
      ]}>
      {children}
    </RNText>
  );
};
