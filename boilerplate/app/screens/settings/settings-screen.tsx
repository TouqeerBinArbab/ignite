import React from "react"
import { observer } from "mobx-react-lite"
import {
  FlatList,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
  ViewStyle,
} from "react-native"
import { CategoryCell, Screen, SearchBar, Text } from "../../components"
import { color, spacing } from "../../theme"
import { navigate, navigationRef } from "../../navigators"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,

  margin: spacing[4],
  paddingBottom: spacing[5],
}

const CONTAINER: ViewStyle = {
  flex: 1,
}

const HEADLINE: TextStyle = {
  color: color.palette.darkGrey,
  textAlign: "right",
  fontSize: 32,
  fontWeight: "bold",
}

const HEADLINESTYLE: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: spacing[5],
}

const SEEMORE: TextStyle = {
  color: color.palette.pinkinsh,
  textAlign: "right",
  paddingTop: spacing[4],
  fontSize: 16,
  fontWeight: "normal",
}

const _renderItem = ({ item, index }) => {
  return <CategoryCell style={{ flex: 1 }} index={index} />
}

export const SettingsScreen = observer(function SettingsScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <SearchBar editable={false} onPress={() => navigate("results")} />

      <TouchableOpacity onPress={() => navigate("results")} style={HEADLINESTYLE}>
        <Text text="Clip-Ins" style={HEADLINE} />
        <Text text="See more" style={SEEMORE} />
      </TouchableOpacity>

      <FlatList data={[1, 1]} style={CONTAINER} numColumns={2} renderItem={_renderItem} />

      <View style={HEADLINESTYLE}>
        <Text text="Closures" style={[HEADLINE, { fontSize: 24, paddingTop: 10 }]} />
        <Text text="See more" style={SEEMORE} />
      </View>

      <FlatList data={[3, 5]} style={CONTAINER} numColumns={2} renderItem={_renderItem} />

      <View style={HEADLINESTYLE}>
        <Text
          text="Extensions/Bundles"
          style={[HEADLINE, { fontWeight: "normal", fontSize: 24, paddingTop: 10 }]}
        />
        <Text text="See more" style={SEEMORE} />
      </View>

      <FlatList data={[3, 5]} style={CONTAINER} numColumns={2} renderItem={_renderItem} />
    </Screen>
  )
})
