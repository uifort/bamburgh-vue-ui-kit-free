<template>
    <div>
        <div class="card card-box mb-5 bg-premium-dark">
            <div class="card-body">
                <apexchart type=line height=350 :options="chartOptions" :series="series" />
            </div>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        components: {
            apexchart: VueApexCharts,
        },
        data: function () {
            return {
                series: [{
                    name: "Music",
                    data: [1, 15, 26, 20, 33, 27]
                },
                    {
                        name: "Photos",
                        data: [3, 33, 21, 42, 19, 32]
                    },
                    {
                        name: "Files",
                        data: [0, 39, 52, 11, 29, 43]
                    }
                ],
                chartOptions: {
                    chart: {
                        height: 360,
                        type: 'line',
                        zoom: {
                            enabled: false
                        },
                        sparkline: {
                            enabled: true,
                        },
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 2,
                            blur: 4,
                            opacity: 1,
                        }
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 2
                    },
                    //colors: ["#3F51B5", '#2196F3'],
                    markers: {
                        size: 6,
                        strokeWidth: 0,
                        hover: {
                            size: 9
                        }
                    },
                    grid: {
                        show: false,
                    },
                    labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
                    xaxis: {
                        type: 'datetime',
                        tooltip: {
                            enabled: false
                        }
                    },
                    legend: {
                        show: false
                    }
                },
            }
        }
    }
</script>