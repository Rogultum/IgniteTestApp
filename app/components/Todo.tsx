import { View, TextStyle, ViewStyle } from "react-native"
import React, { useState } from "react"
import { Text } from "./Text"
import { Toggle } from "./Toggle"

export interface TodoProps {
  todoText?: string
}

export function Todo(props: TodoProps) {
  const { todoText } = props

  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <View style={$container}>
      <Toggle
        containerStyle={$toggle}
        value={!isActive}
        onValueChange={() => setIsActive(!isActive)}
      />
      {isActive ? <Text text={todoText} /> : <Text text={todoText} style={$inactiveText} />}
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row-reverse",
  borderWidth: 0.3,
  padding: 3,
  margin: 3,
  alignItems: "center",
  justifyContent: "space-around",
}

const $toggle: ViewStyle = {
  position: "absolute",
  left: 5,
}

const $inactiveText: TextStyle = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
}
