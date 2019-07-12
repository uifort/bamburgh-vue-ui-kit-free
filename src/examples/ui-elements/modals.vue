<template>
    <div>
        <div class="demo-wrapper">
            <exampleAlt title="Basic">
                <basic></basic>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/widgets/modals/basic'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
        }
    }

</script>