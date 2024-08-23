import { View } from "react-native";
import { Avatar } from "../avatar/avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Email({  }) {
  return (
  <View className="w-full flex-row gap-4">
    <Avatar source={{ uri: "https://github.com/LucasBlunTT.png"}}/>

    <View className="flex-1">
      <View className="flex-row items-center gap-1">
        <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />
      </View>
    </View>
  </View>
  )
}