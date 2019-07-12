<template>
    <div>
        <div class="container">
            <exampleAlt title="Light charts">
                <lightCharts></lightCharts>
            </exampleAlt>
            <exampleAlt title="Dark charts">
                <darkCharts></darkCharts>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import lightCharts from '../examples-source/widgets/charts/light'
    import darkCharts from '../examples-source/widgets/charts/dark'
    import exampleAlt from '../../Layout/Examples/example-alt';


    export default {
        components: {
            exampleAlt,

            lightCharts,
            darkCharts
        }
    }

</script>