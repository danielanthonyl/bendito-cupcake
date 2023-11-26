import { Button } from '../Button/Button';
import { ArrowBendUpLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors';

export const BackButton = ({...rest}) => {
  const navigation = useNavigation();
  const handleGoBack = () => navigation.goBack();

  return (
    <Button
      onPress={handleGoBack}
      label={<ArrowBendUpLeft color={Colors.anotherBlue}/>}
      {...rest}
    />
  );
};


