<template>
    <div>
        <exampleBig>
            <carousel></carousel>
        </exampleBig>
    </div>
</template>

<script>

    import carousel from '../examples-source/widgets/carousel/basic'
    import exampleAlt from '../../Layout/Examples/example-alt';
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleAlt,
            exampleBig,

            carousel
        }
    }

</script>