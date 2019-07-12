<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <exampleAlt title="Basic">
                    <basic></basic>
                </exampleAlt>
            </div>
            <div class="col-lg-6">
                <exampleAlt title="Labels">
                    <labels></labels>
                </exampleAlt>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/progress-bar/basic'
    import labels from '../examples-source/elements/progress-bar/labels'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            labels
        }
    }

</script>