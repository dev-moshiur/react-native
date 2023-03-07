import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const AddsliderScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#f4f5f4" }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          zIndex: 9999,
          marginLeft: 10,
        }}
        onPress={() => Navigation.goBack()}
      >
        <AntDesign name="arrowleft" color="white" size={30} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#096b39",
          height: hp("7%"),
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: wp("5.5%"), color: "white", fontWeight: "400" }}
        >
          Add slider
        </Text>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            height: hp("20%"),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, letterSpacing: 2 }}>
            No Slider Added
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 25,
          backgroundColor: "white",
          paddingVertical: 20,
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Add New Slider</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="black"
            placeholder="Image Url"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Youtube/Blog Link"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#006f2d",
                paddingVertical: 10,

                paddingHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 16 }}
              >
                ADD SLIDER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddsliderScreen;
const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 17,
    borderColor: "#006f2d",
    borderWidth: 1.5,
  },
  inputContainer: {
    width: "90%",
  },
});
