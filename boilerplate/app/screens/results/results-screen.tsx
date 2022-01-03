import React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { CategoryCell, Screen, SearchBar, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { navigate } from "../../navigators"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,

  margin: spacing[4],
  paddingBottom: spacing[5],
}

const HEADLINE: TextStyle = {
  color: color.palette.darkGrey,
  textAlign: "right",
  fontSize: 32,
  fontWeight: "bold",
}

const INPUT: TextStyle = {
  color: color.palette.black,
  fontSize: 16,
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
  return <CategoryCell onPress={() => navigate("shipped")} style={{ flex: 1 }} index={index} />
}
export const ResultsScreen = observer(function ResultsScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <SearchBar inputStyle={INPUT} />
      <View style={HEADLINESTYLE}>
        <Text text="All results" style={[HEADLINE, { fontSize: 24, paddingTop: 10 }]} />
        <Text text="See more" style={SEEMORE} />
      </View>

      <FlatList data={[3, 5, 6, 8]} numColumns={2} renderItem={_renderItem} />
    </Screen>
  )
})
