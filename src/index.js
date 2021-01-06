import React from "react";
import ReactDOM from "react-dom";
import { View, Text, TouchableOpacity } from "react-native";
import usePortal from "react-useportal";
const eva = require("@eva-design/eva");
import { ApplicationProvider, Popover, Button } from "@ui-kitten/components";
import { ProduceList } from "./produce-list";

const fruits = [
  "THIS IS NOT INSIDE A PORTAL",
  "apple",
  "orange",
  "banana",
  "kiwi",
  "grape",
  "pear",
  "strawberry",
];

const vegetables = [
  "THIS IS INSIDE A PORTAL",
  "broccoli",
  "zucchini",
  "carrot",
  "bell pepper",
  "tomato",
  "potato",
  "beet",
  "pea",
  "cauliflour",
];

const PORTAL = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 5, // Ensure the modals are over the header/footer
  paddingBottom: 1500,
  backgroundColor: "yellow",
};

const BUTTON = {
  height: 40,
  width: 200,
  marginBottom: 16,
};

export const PopoverSimpleUsageShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => <Button onPress={() => setVisible(true)}>TOGGLE POPOVER</Button>;

  return (
    <Popover
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}
    >
      <ScrollView contentContainerStyle={popoverStyles.content}>
        {[...new Array(100)].map((item, index) => (
          <Text key={index}>{`${index}. Welcome to UI Kitten 😻`}</Text>
        ))}
      </ScrollView>
    </Popover>
  );
};

const RootComponent = () => {
  const { openPortal, closePortal, isOpen, Portal } = usePortal();
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => (
    <Button style={BUTTON} onPress={() => setVisible(true)}>
      TOGGLE POPOVER
    </Button>
  );

  return (
    <View>
      <Button style={BUTTON} onPress={openPortal}>
        Open Portal
      </Button>

      <Popover
        visible={visible}
        anchor={renderToggleButton}
        onBackdropPress={() => setVisible(false)}
      >
        <ProduceList produceList={fruits} />
      </Popover>
      {isOpen && (
        <Portal>
          <View style={PORTAL}>
            <Text>
              This Portal handles its own state. Press the button below, hit ESC or click outside of
              me.
            </Text>
            <Button style={BUTTON} onPress={closePortal}>
              Close Portal
            </Button>
            <Popover
              visible={visible}
              anchor={renderToggleButton}
              onBackdropPress={() => setVisible(false)}
            >
              <ProduceList produceList={vegetables} />
            </Popover>
          </View>
        </Portal>
      )}
    </View>
  );
};

let App = document.getElementById("app");

ReactDOM.render(
  <ApplicationProvider {...eva} theme={eva.light}>
    <RootComponent name="Yomi" />
  </ApplicationProvider>,
  App
);
