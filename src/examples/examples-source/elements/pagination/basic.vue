<template>
    <div>
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
    </div>
</template>
<script>
    export default {
        methods: {
            linkGen(pageNum) {
                return pageNum === 1 ? '?' : ``
            }
        }
    }
</script>