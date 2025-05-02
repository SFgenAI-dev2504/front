import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../styles/RadarChart.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = (props) => {
    const data = {
        labels: ['結果1', '結果2', '結果3', '結果4', '結果5'], // ★5項目で五角形
        datasets: [
            {
                label: 'ラベルA',
                data: [1, 100, 70, 87, 90],
                backgroundColor: 'rgba(34, 202, 236, 0.2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(34, 202, 236, 1)',
            },
            {
                label: 'ラベルB',
                data: [60, 44, 99, 14, 32],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                    backdropColor: 'transparent',
                },
                pointLabels: {
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return (
        <div className="chart">
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
