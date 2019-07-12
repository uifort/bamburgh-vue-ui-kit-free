<template>
    <div>
        <b-progress class="mb-5" :value="value" :max="max" show-progress animated></b-progress>
        <b-progress class="mb-5" :max="max" show-value>
            <b-progress-bar class="h-100 mb-5" :value="value * (6 / 10)" variant="success"></b-progress-bar>
            <b-progress-bar class="h-100 mb-5" :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
            <b-progress-bar class="h-100 mb-5" :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
        </b-progress>
        <div class="text-center">
            <b-button size="sm" variant="primary" @click="rendomValue">Click me</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 45,
                max: 100
            }
        },
        methods: {
            rendomValue() {
                this.value = Math.random() * this.max
            }
        }
    }
</script>