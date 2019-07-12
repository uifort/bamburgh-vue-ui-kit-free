<template>
    <div class="demo-wrapper mb-5">
        <h6 class="heading-3">{{ title }}</h6>
        <div class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>