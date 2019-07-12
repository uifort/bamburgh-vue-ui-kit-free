<template>
    <div>
        <div class="row">
            <div class="col-xl-6 bg-premium-dark">
                <div class="p-0 p-lg-5">
                    <exampleIcons title="FontAwesome Icons" desc="Over 1500 pixel perfect icons available, each designed from scratch, forged from years of experience.">
                        <fontAwesomeIcons></fontAwesomeIcons>
                    </exampleIcons>
                </div>
            </div>
            <div class="col-xl-6 bg-night-sky">
                <div class="p-0 p-lg-5">
                    <exampleIcons title="Material Icons" desc="Material icons are delightful, beautifully crafted symbols for common actions and items.">
                        <MaterialIcons></MaterialIcons>
                    </exampleIcons>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import fontAwesomeIcons from '../examples-source/elements/icons/fontawesome-icons'
    import MaterialIcons from '../examples-source/elements/icons/material-icons'
    import exampleIcons from '../../Layout/Examples/example-icons';


    export default {
        components: {
            exampleIcons,

            fontAwesomeIcons,
            MaterialIcons
        }
    }

</script>