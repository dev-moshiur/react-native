import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Homebody from "../components/Home/Homebody";

import axios from "axios";

import { useQuery } from "react-query";


const HomeScreen = () => {
  const {data:balanceData = 0} = useQuery(['balance'],()=>getBalanceNumber(),{refetchInterval:1500});
  const {data:Allpendingorder = 0} = useQuery(['pendingorder'],()=>getpendingorder(),{refetchInterval:1500});
  const {data:Allpendingrefund = 0} = useQuery(['pendingrefund'],()=>getpendingrefund(),{refetchInterval:1500});
 
  
  const getBalanceNumber = async ()=>{
    let response = await axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingaddbalance",
    })
    return response.data
  }

  
  const getpendingorder = async() => {
   const response = await axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingorder",
    })
    return response.data
      
  };
  const getpendingrefund = async() => {
   const response = await axios({
      method: "get",
      url: "https://offerapp.onrender.com/getpendingrefund",
    })
      return response.data
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Header />
      <Homebody
        allpendingbalance={balanceData.length}
        Allpendingorder={Allpendingorder.length}
        Allpendingrefund={Allpendingrefund.length}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
