import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
  );
}

export default App;
