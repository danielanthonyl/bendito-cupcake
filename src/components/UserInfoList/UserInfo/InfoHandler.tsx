import { View } from 'react-native';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { ArrowCircleRight } from 'phosphor-react-native';
import { InfoHandlerStyles } from './InfoHandlerStyles';

export const InfoHandler = ({
  label,
  value,
  withButton,
}: {
  label: string;
  value: string;
  withButton: boolean;
}) => {
  return (
    <View style={InfoHandlerStyles.container}>
      <Text>{label}</Text>
      <View style={InfoHandlerStyles.valueWithButton}>
        <Text>{value}</Text>
        {withButton ? <Button label={<ArrowCircleRight />} /> : null}
      </View>
    </View>
  );
};
