<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <exampleAlt title="Basic">
                        <listBasic></listBasic>
                    </exampleAlt>
                </div>
                <div class="col-lg-6">
                    <exampleAlt title="Alternate">
                        <listBasic2></listBasic2>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import listBasic from '../examples-source/elements/lists/list-1'
    import listBasic2 from '../examples-source/elements/lists/list-2'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            listBasic,
            listBasic2,
        }
    }

</script>