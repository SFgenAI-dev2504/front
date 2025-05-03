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

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = (props) => {
    const results = props.results.data;
    const data = {
        labels: ['結果1', '結果2', '結果3', '結果4', '結果5'],
        datasets: [
            {
                label: 'ラベルA',
                data: [
                    results[0].element1,
                    results[0].element2,
                    results[0].element3,
                    results[0].element4,
                    results[0].element5,
                ],
                backgroundColor: 'rgba(34, 202, 236, 0.2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(34, 202, 236, 1)',
            },
            {
                label: 'ラベルB',
                data: [
                    results[1].element1,
                    results[1].element2,
                    results[1].element3,
                    results[1].element4,
                    results[1].element5,
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
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
                    color: '#000',
                },
                label: {
                    color: '#000',
                },
                pointLabels: {
                    font: {
                        size: 12,
                    },
                    color: '#000',
                },
                grid: {
                    color: '#000',
                },
                angleLines: {
                    color: '#000',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000',
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
