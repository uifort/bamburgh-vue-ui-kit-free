<template>
    <div>
        <div class="bg-premium-dark py-5">
            <div class="container pt-5">
                <cards-1></cards-1>
            </div>
        </div>
    </div>
</template>

<script>

    import cards1 from '../examples-source/elements/cards/cards-1'

    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleBig,

            cards1,
        }
    }

</script>