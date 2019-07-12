<template>
    <div>
        <exampleAlt title="Basic">
            <basic></basic>
        </exampleAlt>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/alerts/basic'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic
        }
    }

</script>