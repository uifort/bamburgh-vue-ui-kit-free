<template>
    <div class="example-box example-box-alt pb-5">
        <h4 class="heading-2 pb-4">{{ title }}</h4>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>