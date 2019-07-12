<template>
    <div>
        <div class="row">
            <div class="col-md-6 demo-wrapper">
                <exampleAlt title="Normal">
                    <normal></normal>
                </exampleAlt>
            </div>
            <div class="col-md-6 demo-wrapper">
                <exampleAlt title="Split">
                    <split></split>
                </exampleAlt>
            </div>
        </div>
    </div>
</template>

<script>

    import normal from '../examples-source/widgets/dropdowns/normal'
    import split from '../examples-source/widgets/dropdowns/split'
    import exampleAlt from '../../Layout/Examples/example-alt';


    export default {
        components: {
            exampleAlt,

            normal,
            split,
        }
    }

</script>