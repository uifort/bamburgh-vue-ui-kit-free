<template>
    <div>
        <div class="row demo-wrapper">
            <div class="col-lg-6">
                <exampleAlt title="Basic">
                    <basic/>
                </exampleAlt>
            </div>
            <div class="col-lg-6">
                <exampleAlt title="Pills">
                    <pills/>
                </exampleAlt>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/badges/basic'
    import pills from '../examples-source/elements/badges/pills'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            pills
        }
    }

</script>