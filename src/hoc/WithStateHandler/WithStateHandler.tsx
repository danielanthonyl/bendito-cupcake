import { View } from 'react-native';
import { Text } from '../../components/Text/Text';
import { Spinner } from 'phosphor-react-native';
import { ReactNode, useEffect } from 'react';
import { WithStateHandlerStyles } from './WithStateHandlerStyles';

export interface WithStateHandlerProps {
  loading: boolean;
  error: string | null;
  isEmptyData?: boolean;
  loadingMessage?: string;
  emptyDataMessage?: string;
  children: ReactNode;
  asyncCallHandler?(): void;
}

export const WithStateHandler = ({
  error,
  isEmptyData,
  loading,
  loadingMessage,
  emptyDataMessage,
  children,
  asyncCallHandler,
}: WithStateHandlerProps) => {
  useEffect(() => {
    asyncCallHandler?.();
  }, [asyncCallHandler]);

  if (loading) {
    return (
      <View style={WithStateHandlerStyles.container}>
        <Spinner />

        {loadingMessage ? <Text>{loadingMessage}</Text> : null}
      </View>
    );
  }

  if (error) {
    return (
      <View style={WithStateHandlerStyles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (isEmptyData) {
    return (
      <View style={WithStateHandlerStyles.container}>
        <Text fontSize={16}>
          {emptyDataMessage
            ? emptyDataMessage
            : 'Não conseguimos carregar os dados. Por favor, tente atualizar o aplicativo.'}
        </Text>
      </View>
    );
  }

  return children;
};
