import { FlatList, Text, View } from 'react-native';
import { Input } from '@/components/input/input';
import { MenuButton } from '@/components/menuButton/menu-button';
import { Avatar } from '@/components/avatar/avatar';
import { Email } from '@/components/email/email';
import { EMAILS } from '@/utils/email';
import FloatButton from '@/components/floatButton/floatButton';
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const navigation = useNavigation();
  
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: 'https://github.com/LucasBlunTT.png' }}
          size="small"
        />
      </Input>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase  text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
      <FloatButton />
    </View>
  );
}
