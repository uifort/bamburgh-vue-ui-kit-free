<template>
    <div>
        <images></images>
        <h2 class="heading-1 d-flex align-items-center">
            <div class="container pb-5">
                Spinners
            </div>
        </h2>
        <div class="row mb-5">
            <div class="col-md-6">
                <exampleAlt2 title="Border">
                    <spinnerBorder></spinnerBorder>
                </exampleAlt2>
            </div>
            <div class="col-md-6">
                <exampleAlt2 title="Grow">
                    <spinnerGrow></spinnerGrow>
                </exampleAlt2>
            </div>
        </div>

        <h2 class="heading-1 d-flex align-items-center">
            <div class="container pb-5">
                Toasts
            </div>
        </h2>
        <div class="row">
            <div class="col-md-6">
                <exampleBig>
                    <toastBasic></toastBasic>
                </exampleBig>
            </div>
            <div class="col-md-6">
                <exampleBig>
                    <toastTranslucent></toastTranslucent>
                </exampleBig>
            </div>
        </div>
    </div>
</template>

<script>

    import images from '../examples-source/elements/images/basic'
    import spinnerBorder from '../examples-source/elements/spinners/border'
    import spinnerGrow from '../examples-source/elements/spinners/grow'

    import toastBasic from '../examples-source/elements/toasts/basic'
    import toastTranslucent from '../examples-source/elements/toasts/translucent'

    import exampleAlt2 from '../../Layout/Examples/example-alt-2';
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleAlt2,
            exampleBig,

            images,
            spinnerBorder,
            spinnerGrow,
            toastBasic,
            toastTranslucent
        }
    }

</script>