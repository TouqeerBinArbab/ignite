import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, images, spacing } from "../../theme"
import { Icon, TextField } from ".."
import { string } from "mobx-state-tree/dist/internal"

const TEXTFILED: ViewStyle = {
  flex: 1,
  borderBottomWidth: 1,
  borderBottomColor: color.palette.borderColor,
}

const ICON: ImageStyle = {
  position: "absolute",
  bottom: spacing[4] + spacing[1],
  right: 10,
  height: 18,
  width: 18,
  tintColor: color.palette.pinkinsh,
}

const FLEXROW: ViewStyle = {
  flexDirection: "row",
}

const INPUT: TextStyle = {
  color: color.palette.black,
  fontSize: 16,
}

export interface SearchBarProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>

  children: React.ReactNode
  onPress: () => void

  editable?: boolean
}

/**
 * Describe your component here
 */
export const SearchBar = observer(function SearchBar(props: SearchBarProps) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress} style={FLEXROW}>
      <TextField
        editable={props.editable}
        placeholderTextColor={color.palette.placeHolder}
        inputStyle={[INPUT, props.inputStyle]}
        placeholder="Search"
        style={TEXTFILED}
      />
      <Icon style={ICON} icon={images.icSearch} />
    </TouchableOpacity>
  )
})
