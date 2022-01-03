import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {
  FlatList,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { Screen, Switch } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, images } from "../../theme"
import { View } from "react-native"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  margin: 20,
}

const Data: any = [
  {
    id: 1,
    name: "Color",
    value: "Black",
  },
  {
    id: 2,
    name: "Length",
    value: `10"`,
  },
  {
    id: 3,
    name: "Quantity",
    value: "1",
  },
  {
    id: 4,
    name: "Hair Category",
    value: "Bundles",
  },
  {
    id: 5,
    name: "Hair Type",
    value: "Straight",
  },
  {
    id: 6,
    name: "Customer Address",
    value: "Nob Hill Park",
  },
  {
    id: 7,
    name: "Customer Street",
    value: "Prospect Avenue",
  },
  {
    id: 8,
    name: "Customer State",
    value: "Montana",
  },
  {
    id: 9,
    name: "ZIP Code",
    value: "59001",
  },
  {
    id: 10,
    name: `Tota Payment \nAmount`,
    value: `$80.99`,
  },
]
const IMAGE: ImageStyle = {
  height: 109,
  width: 109,
  resizeMode: "stretch",
}

const HEADLINE: TextStyle = {
  color: color.palette.darkGrey,
  textAlign: "right",
  fontSize: 24,
  fontWeight: "bold",
}

const TITLE: TextStyle = {
  color: color.palette.paleGrey,
  fontSize: 16,
  paddingRight: 10,
  fontWeight: "normal",
}
const PARAGRAPH: TextStyle = {
  color: color.palette.darkGrey,
  paddingTop: 16,
  fontSize: 14,
  fontWeight: "normal",
}

const renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
      }}
    >
      <Text
        style={
          item.id == 10
            ? [TITLE, { fontWeight: "600", color: color.palette.darkGrey, flex: 1 }]
            : [TITLE, { flex: 1 }]
        }
      >
        {item.name}
      </Text>
      <Text
        style={
          item.id == 10
            ? [TITLE, { flex: 1, fontWeight: "bold", color: color.palette.pinkinsh }]
            : [TITLE, { flex: 1, fontWeight: "bold", color: color.palette.darkGrey }]
        }
      >
        {item.value}
      </Text>
    </View>
  )
}

export const ShippedScreen = observer(function ShippedScreen() {
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={{ flexDirection: "row" }}>
        <Image style={IMAGE} source={images.icDummy1} />
        <View style={{ justifyContent: "center", margin: 16 }}>
          <Text style={TITLE}>
            {"Order #"}
            <Text style={{ color: color.palette.pinkinsh, fontWeight: "bold" }}>12336676</Text>
          </Text>
          <Text style={HEADLINE}>Straight Hair</Text>
          <Text style={TITLE}>
            {"Price"}
            <Text style={{ color: color.palette.pinkinsh, fontWeight: "bold" }}>{` $65.99`}</Text>
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <FlatList renderItem={renderItem} data={Data} />
      </View>

      <View style={{ marginVertical: 16 }}>
        <Text style={PARAGRAPH}>{`Have you shipped this item?`}</Text>
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: color.palette.lightGrey,
            height: 50,
            flexDirection: "row",
            marginTop: 24,
          }}
        >
          <TouchableOpacity
            onPress={() => setIsEnabled(!isEnabled)}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !isEnabled ? color.palette.pinkinsh : color.palette.white,
              borderTopRightRadius: 18,
            }}
          >
            <Text
              style={[
                TITLE,
                {
                  color: !isEnabled ? color.palette.darkGrey : color.palette.paleGrey,
                  fontWeight: !isEnabled ? "bold" : "normal",
                },
              ]}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsEnabled(!isEnabled)}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 18,
              backgroundColor: isEnabled ? color.palette.pinkinsh : color.palette.white,
            }}
          >
            <Text
              style={[
                TITLE,
                {
                  color: isEnabled ? color.palette.darkGrey : color.palette.paleGrey,
                  fontWeight: isEnabled ? "bold" : "normal",
                },
              ]}
            >
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
})
