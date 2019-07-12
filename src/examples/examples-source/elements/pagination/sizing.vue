<template>
    <div>
        <b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
        <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
        <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // Simple array of strings
                pages1: ['', '', ''],
                // Array of objects with string links
                pages2: [
                    { link: '', text: 'One' },
                    { link: '', text: 'Two' },
                    { link: '', text: 'Three' }
                ],
            }
        }
    }
</script>