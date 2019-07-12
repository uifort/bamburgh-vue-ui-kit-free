<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <exampleAlt title="Basic">
                    <basic></basic>
                </exampleAlt>
            </div>
            <div class="col-lg-6">
                <exampleAlt title="Sizing">
                    <sizing></sizing>
                </exampleAlt>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/pagination/basic'
    import sizing from '../examples-source/elements/pagination/sizing'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            sizing,
        }
    }

</script>