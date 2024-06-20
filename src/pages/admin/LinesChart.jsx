import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ventas = [0, 35, 20, 10, 40, -10, 60, 70, 30, 90, 100];
const pendientes = [0, 5, 7, 10, 2, 4, 10, 1, 8, 7, 8];
const canceladas = [0, 10, 20, 2, 20, 0, 10, 12, 5, 14, 10];
const devoluciones = [0, 15, 30, 5, 15, 20, 40, 10, 10, 12, 5];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "octubre", "noviembre", "diciembre"];

const myData = {
  labels: meses,
  datasets: [
    {
      label: "Ventas",
      data: ventas,
      tension: 0.5,
      fill: true,
      pointRadius: 5,
      borderColor: "rgba(34,197,94,1)",
      backgroundColor: "rgba(34,197,94,0.2)"
    },
    {
      label: "Devoluciones",
      data: devoluciones,
      tension: 0.5,
      fill: true,
      pointRadius: 5,
      borderColor: "rgba(53,109,202,1)",
      backgroundColor: "rgba(53,109,202,0.2)"
    },
    {
      label: "Pendientes",
      data: pendientes,
      tension: 0.5,
      fill: true,
      pointRadius: 5,
      borderColor: "rgba(236,72,153,1)",
      backgroundColor: "rgba(236,72,153,0.2)"
    },
    {
      label: "Canceladas",
      data: canceladas,
      tension: 0.5,
      fill: true,
      pointRadius: 5,
      borderColor: "rgba(239,68,68,1)",
      backgroundColor: "rgba(239,68,68,0.2)"
    }
  ]
};

const myOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Beneficios Mensuales',
    },
  },
};

export default function LinesChart() {
  return <Line data={myData} options={myOptions}/>;
}
