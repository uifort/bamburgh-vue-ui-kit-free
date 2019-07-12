<template>
    <div>
        <exampleAlt title="Menus">
            <menus></menus>
        </exampleAlt>
        <exampleAlt title="Navbars">
            <navbars></navbars>
        </exampleAlt>
    </div>
</template>

<script>

    import menus from '../examples-source/elements/navigation/menus'
    import navbars from '../examples-source/elements/navigation/navbars'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            menus,
            navbars,
        }
    }

</script>