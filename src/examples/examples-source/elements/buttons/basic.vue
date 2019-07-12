<template>
    <div>
        <b-button variant="primary">Button</b-button>
        <b-button variant="primary">
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="adjust"/>
            </span>
            <span class="btn-wrapper--label">Left icon</span>
        </b-button>
        <b-button variant="primary">
            <span class="btn-wrapper--label">Right icon</span>
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="file-archive"/>
            </span>
        </b-button>
        <b-button variant="primary">
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="cog"/>
            </span>
        </b-button>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faFileArchive,
        faCog,
        faAdjust
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faFileArchive,
        faCog,
        faAdjust
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>