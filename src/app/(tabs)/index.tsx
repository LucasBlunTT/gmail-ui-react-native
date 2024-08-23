
import { Text, View } from 'react-native'
import { Input } from '@/components/input/input'
import { MenuButton } from '@/components/menuButton/menu-button'
import { Avatar } from '@/components/avatar/avatar'
import { Email } from '@/components/email/email'

export default function index() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar 
        source={{ uri: "https://github.com/LucasBlunTT.png"}} 
        size="small"
        />
      </Input>  

      <Email />
    </View>
  )
}
