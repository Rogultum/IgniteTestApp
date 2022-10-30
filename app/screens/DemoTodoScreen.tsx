import { ViewStyle, View, TextStyle } from "react-native"
import React, { FC, useMemo, useState, useCallback } from "react"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { colors, spacing } from "../theme"
import { Todo } from "../components/Todo"

export const DemoTodoScreen: FC<DemoTabScreenProps<"DemoTodo">> = function DemoTodoScreen(_props) {
  const [inputText, setInputText] = useState<string>("")
  const [todoList, setTodoList] = useState([])
  const todoNum: number = todoList.length

  const handleAdd = useCallback(() => {
    setTodoList([...todoList, inputText])
    setInputText("")
  }, [inputText])

  const InputIconRight = useMemo(
    () =>
      function InputIconRight(props: TextFieldAccessoryProps) {
        return (
          <Icon
            onPress={handleAdd}
            icon="ladybug"
            containerStyle={props.style}
            color={inputText !== "" ? "red" : colors.textDim}
          />
        )
      },
    [inputText],
  )

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="demoTodoScreen.title" style={$title} />
      <TextField
        value={inputText}
        onChangeText={(value) => setInputText(value)}
        labelTx="demoTodoScreen.inputLabel"
        placeholderTx="demoTodoScreen.inputPlaceholder"
        RightAccessory={InputIconRight}
      />
      <Text tx="demoTodoScreen.todoNum" txOptions={{ num: todoNum }} />
      <View style={$todoContainer}>
        {todoList.map((item) => {
          return <Todo key={item} todoText={item} />
        })}
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}

const $todoContainer: ViewStyle = {
  flex: 0.95,
  justifyContent: "center",
}

const $title: TextStyle = {
  marginBottom: spacing.small,
}
