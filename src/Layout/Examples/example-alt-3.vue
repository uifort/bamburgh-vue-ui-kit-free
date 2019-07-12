<template>
    <div class="example-box example-box-alt pb-5">
        <div class="heading-3">{{ title }}</div>
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