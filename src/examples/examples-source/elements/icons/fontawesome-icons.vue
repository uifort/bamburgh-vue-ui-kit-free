<template>
    <div>
        <div class="icon-demo-box">
            <div class="card p-2 text-primary"><font-awesome-icon class="display-3" icon="building"/></div>
            <div class="card p-2 text-success"><font-awesome-icon class="display-3" icon="calendar-alt"/></div>
            <div class="card p-2 text-warning"><font-awesome-icon class="display-3" icon="comment-dots"/></div>
            <div class="card p-2 text-danger"><font-awesome-icon class="display-3" icon="file-audio"/></div>
            <div class="card p-2 text-dark"><font-awesome-icon class="display-3" icon="grin-beam-sweat"/></div>
            <div class="card p-2 text-info"><font-awesome-icon class="display-3" icon="hand-paper"/></div>
            <div class="card p-2 text-first"><font-awesome-icon class="display-3" icon="hospital"/></div>
            <div class="card p-2 text-second"><font-awesome-icon class="display-3" icon="map"/></div>
            <div class="card p-2"><font-awesome-icon class="display-3" icon="object-group"/></div>
            <div class="card p-2"><font-awesome-icon class="display-3" icon="sun"/></div>
            <div class="card p-2"><font-awesome-icon class="display-3" icon="snowflake"/></div>
            <div class="card p-2"><font-awesome-icon class="display-3" icon="images"/></div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faImages,
        faSnowflake,
        faSun,
        faObjectGroup,
        faMap,
        faHospital,
        faHandPaper,
        faGrinBeamSweat,
        faFileAudio,
        faCommentDots,
        faCalendarAlt,
        faBuilding
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faImages,
        faSnowflake,
        faSun,
        faObjectGroup,
        faMap,
        faHospital,
        faHandPaper,
        faGrinBeamSweat,
        faFileAudio,
        faCommentDots,
        faCalendarAlt,
        faBuilding
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>