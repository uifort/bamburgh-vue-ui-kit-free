<template>
    <div>
        <div class="demo-wrapper">
            <exampleAlt title="Position">
                <position></position>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import position from '../examples-source/widgets/popovers/position'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            position,
        }
    }

</script>