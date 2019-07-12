<template>
    <div>
        <div class="demo-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <exampleAlt title="Basic">
                        <basic/>
                    </exampleAlt>
                </div>
                <div class="col-lg-6">
                    <exampleAlt title="Sizing">
                        <sizing/>
                    </exampleAlt>
                </div>
            </div>
            <exampleAlt title="Colors">
                <colors/>
            </exampleAlt>
            <exampleAlt title="Outline">
                <outline/>
            </exampleAlt>
            <exampleAlt title="Pills">
                <pills/>
            </exampleAlt>
            <exampleAlt title="Links">
                <links/>
            </exampleAlt>
            <exampleAlt title="Loading">
                <loading/>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/buttons/basic';
    import sizing from '../examples-source/elements/buttons/sizing';
    import colors from '../examples-source/elements/buttons/colors';
    import outline from '../examples-source/elements/buttons/outline';
    import pills from '../examples-source/elements/buttons/pills';
    import links from '../examples-source/elements/buttons/links';
    import loading from '../examples-source/elements/buttons/loading';

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {

            exampleAlt,

            basic,
            sizing,
            colors,
            outline,
            pills,
            links,
            loading
        }
    }

</script>