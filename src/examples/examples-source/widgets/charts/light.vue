<template>
    <div>
        <div class="card card-box mb-5">
            <div class="card-body">
                <apexchart type=line height=350 :options="chartOptions" :series="series" />
            </div>
        </div>
        <div class="card card-box mb-5">
            <div class="card-body">
                <apexchart type=line height=350 :options="chartOptions2" :series="series2" />
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
                series: [
                    {
                        name: "High - 2013",
                        data: [28, 29, 33, 36, 32, 32, 33]
                    },
                    {
                        name: "Low - 2013",
                        data: [12, 11, 14, 18, 17, 13, 13]
                    }
                ],
                chartOptions: {
                    chart: {
                        shadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 1
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#77B6EA', '#545454'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    title: {
                        text: 'Average High & Low Temperature',
                        align: 'left'
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {

                        size: 6
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature'
                        },
                        min: 5,
                        max: 40
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                    }
                },

                series2: [{
                    name: 'Income',
                    type: 'column',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                }, {
                    name: 'Cashflow',
                    type: 'column',
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                }, {
                    name: 'Revenue',
                    type: 'line',
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }],
                chartOptions2: {
                    dataLabels: {
                        enabled: false
                    },

                    stroke: {
                        width: [1, 1, 4]
                    },
                    title: {
                        text: 'XYZ - Stock Analysis (2009 - 2016)',
                        align: 'left',
                        offsetX: 110
                    },
                    xaxis: {
                        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    },
                    yaxis: [{
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {
                            style: {
                                color: '#008FFB',
                            }
                        },
                        title: {
                            text: "Income (thousand crores)",
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },

                        {
                            seriesName: 'Income',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: '#00E396'
                            },
                            labels: {
                                style: {
                                    color: '#00E396',
                                }
                            },
                            title: {
                                text: "Operating Cashflow (thousand crores)",
                                style: {
                                    color: '#00E396',
                                }
                            },
                        },
                        {
                            seriesName: 'Revenue',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: '#FEB019'
                            },
                            labels: {
                                style: {
                                    color: '#FEB019',
                                },
                            },
                            title: {
                                text: "Revenue (thousand crores)",
                                style: {
                                    color: '#FEB019',
                                }
                            }
                        },
                    ],
                    tooltip: {
                        fixed: {
                            enabled: true,
                            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                            offsetY: 30,
                            offsetX: 60
                        },
                    },
                    legend: {
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                }
            }
        }
    }
</script>