import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Homebody from "../components/Home/Homebody";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = () => {
  const [Allpendingbalance, setAllpendingbalance] = useState([]);
  const [Allpendingorder, setAllpendingorder] = useState([]);
  const [Allpendingrefund, setAllpendingrefund] = useState([]);
  const isFocused = useIsFocused();

  const getpendingaddbalance = () => {
    axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingaddbalance",
    })
      .then((response) => {
        setAllpendingbalance(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getpendingorder = () => {
    axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingorder",
    })
      .then((response) => {
        setAllpendingorder(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getpendingrefund = () => {
    axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingrefund",
    })
      .then((response) => {
        setAllpendingrefund(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Eitake Real Time Fetch korte hobe//////////////////////////////////////////////////

    if (isFocused) {
      getpendingaddbalance();
      getpendingorder();
      getpendingrefund();
    }
  }, [isFocused]);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Header />
      <Homebody
        allpendingbalance={Allpendingbalance}
        Allpendingorder={Allpendingorder}
        Allpendingrefund={Allpendingrefund}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
