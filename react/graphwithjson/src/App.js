import logo from './logo.svg';
import './App.css';
import React from "react";
import {View} from "react-native";
import FusionCharts from 'react-native-fusioncharts';


const dataSource = {
  chart:{
    caption:"Temperature",
    yaxisname:"Temperature",
    plottooltext:"<b>$dataValue</b> on <b>$label</b>",
    theme:'fusion'
  },
  data:null

};

function App() {
  const data = require("./data.json");
  dataSource.data = data;
  

  return (
    <View style={{ flex: 1}}>
      <FusionCharts
        type="timeseries"
        width={'100%'}
        height={'100%'}
        dataFormat='json'
        dataSource={dataSource}
      />
    </View>
  );
}

export default App;
