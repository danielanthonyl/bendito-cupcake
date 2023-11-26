import { View } from 'react-native';
import { Input } from '../../../components/Input/Input';
import { List, MagnifyingGlass, UserCircle } from 'phosphor-react-native';
import { HeaderStyles } from './HeaderStyles';
import { Colors } from '../../../constants/colors';
import { Button } from '../../../components/Button/Button';

export interface HeaderProps {
  onDrawerPress(): void;
  onProfilePress(): void;
  onSearch(): void;
}

export const Header = ({
  onDrawerPress,
  onProfilePress,
  onSearch,
}: HeaderProps) => {
  return (
    <View style={HeaderStyles.container}>
      <Button
        onPress={onDrawerPress}
        label={<List weight="bold" color={Colors.blue} size={32} />}
      />

      <Input onChangeText={onSearch} suffix={MagnifyingGlass} />

      <Button
        onPress={onProfilePress}
        label={<UserCircle weight="bold" color={Colors.blue} size={32} />}
      />
    </View>
  );
};
