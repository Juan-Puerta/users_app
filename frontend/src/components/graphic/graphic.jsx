import React, { useContext } from "react";
import AppContext from "../../store/app_context";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Graphic = () => {
  const state = useContext(AppContext);

  var my_options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 35,
      },
      x: {
        ticks: { color: "rgb(22, 119, 255)" },
      },
    },
  };

  var my_data = {
    labels: state.followers[1],
    datasets: [
      {
        label: "Followers",
        data: state.followers[0],
        backgroundColor: "rgb(22, 119, 255)",
      },
    ],
  };

  return <Bar data={my_data} options={my_options} />;
};

export default Graphic;
