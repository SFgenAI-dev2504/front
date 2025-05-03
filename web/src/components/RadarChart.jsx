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
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import {
    CHART_BACKDROP_COLOR,
    CHART_MAX,
    CHART_STEP_SIZE,
    POINT_LABELS_FONT_SIZE,
} from '../constant/config';

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
        labels: [
            Strings.CHART_LABEL1,
            Strings.CHART_LABEL2,
            Strings.CHART_LABEL3,
            Strings.CHART_LABEL4,
            Strings.CHART_LABEL5,
        ],
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
                suggestedMin: Config.CHART_MIN,
                suggestedMax: Config.CHART_MAX,
                ticks: {
                    stepSize: Config.CHART_STEP_SIZE,
                    backdropColor: Config.CHART_BACKDROP_COLOR,
                    color: Config.BASE_COLOR,
                },
                label: {
                    color: Config.BASE_COLOR,
                },
                pointLabels: {
                    font: {
                        size: Config.POINT_LABELS_FONT_SIZE,
                    },
                    color: Config.BASE_COLOR,
                },
                grid: {
                    color: Config.BASE_COLOR,
                },
                angleLines: {
                    color: Config.BASE_COLOR,
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: Config.BASE_COLOR,
                },
            },
        },
    };

    return (
        <div className={'chart'}>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
