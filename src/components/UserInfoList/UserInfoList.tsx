import { View, ViewStyle } from 'react-native';
import { InfoHandler } from './UserInfo/InfoHandler';
import { UserInfoListStyles } from './UserInfoListStyles';
import { dictionary } from './Helpers/portugueseDictionary';

export const userTest = {
  cpf: '123456789-12',
  address: 'Av. Exemplo 123',
  paymentMethod: 'Pix',
};

interface UserList {
  editMode?: boolean;
  user: UserProps;
  containerStyle?: ViewStyle;
}
interface UserProps {
  cpf?: string;
  address?: string;
  paymentMethod?: string;
}
// debt: create user_reducer
export const UserInfoList = ({
  editMode = false,
  user,
  containerStyle,
}: UserList) => {
  return (
    <View style={[UserInfoListStyles.wrapper, containerStyle]}>
      {Object.entries(user).map(([key, value], index) => (
        <InfoHandler
          key={index}
          label={dictionary.get(key)}
          value={value}
          withButton={editMode}
        />
      ))}
    </View>
  );
};
