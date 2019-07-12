<template>
    <div class="mb-5 pt-4">
        <h4 class="heading-2 mt-5 heading-2-demo pb-3 text-white">{{ title }}</h4>
        <p class="px-5">{{ desc }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            desc: String
        }
    }
</script>