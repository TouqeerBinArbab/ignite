import * as React from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, images, spacing } from "../../theme"
import { Text } from "../text/text"

const HORIZONTAL_CONTAINER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const FLEXROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const TEXTPRICE: TextStyle = {
  color: color.palette.pinkinsh,
  textAlign: "right",
  paddingTop: 2,
  fontSize: 12,
  fontWeight: "bold",
}

const HEADLINE: TextStyle = {
  color: color.palette.darkGrey,
  paddingTop: 10,
  fontSize: 12,
  fontWeight: "700",
}
const TITLE: TextStyle = {
  color: color.palette.paleGrey,
  paddingTop: 10,
  fontSize: 8,
  fontWeight: "normal",
}
const PARAGRAPH: TextStyle = {
  color: color.palette.darkGrey,
  paddingTop: 10,
  paddingLeft: 10,
  fontSize: 8,
  fontWeight: "700",
}
const IMAGE: ImageStyle = {
  height: 114,
  width: "100%",
  resizeMode: "stretch",
}

export interface CategoryCellProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  index?: number
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const CategoryCell = observer(function CategoryCell(props: CategoryCellProps) {
  const { style, index, onPress } = props

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: spacing[4],
          paddingRight: index % 2 == 0 ? spacing[2] : 0,
          paddingLeft: index % 2 != 0 ? spacing[2] : 0,
        }}
      >
        <Image style={IMAGE} source={images.icDummy1} />
        <View style={{ margin: spacing[3] }}>
          <Text text="Straight Hair" style={HEADLINE} />
          <View style={HORIZONTAL_CONTAINER}>
            <View>
              <View style={FLEXROW}>
                <Text text="Color" style={TITLE} />
                <Text text="Brown" style={PARAGRAPH} />
              </View>
              <View style={FLEXROW}>
                <Text text="Length" style={TITLE} />
                <Text text="6''" style={PARAGRAPH} />
              </View>
            </View>
            <View style={{ alignSelf: "flex-end", justifyContent: "center" }}>
              <Text text="Length" style={[TITLE, { textAlign: "right" }]} />
              <Text text="$65.99" style={TEXTPRICE} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
})
