<template>
    <div>
        <b-list-group class="mb-5">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div class="w-100">
                    <div class="d-flex flex-wrap justify-content-between mb-2">
                        <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                        <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                    </div>
                    <h6 class="pt-1 pb-1">
                        <a href="javascript:void(0);">#56 - Deploy new website</a>
                    </h6>
                    <p class="mb-3">This is a dummy text acting like a small description for the above title...</p>
                </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div class="w-100">
                    <div class="d-flex flex-wrap justify-content-between mb-2">
                        <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                        <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                    </div>
                    <h6 class="pt-1 pb-1">
                        <a href="javascript:void(0);">#56 - Deploy new website</a>
                    </h6>
                    <p class="mb-3">This is a dummy text acting like a small description for the above title...</p>
                </div>
            </b-list-group-item>
            <b-list-group-item class="bg-light d-flex justify-content-between align-items-center align-content-center pl-0">
                <a href="javascript:void(0);" class="btn btn-sm btn-link" v-b-tooltip.top title="There are 653 new comments available!">
                    <span class="btn-wrapper--icon">
                        <font-awesome-icon icon="comments"/>
                    </span>
                    <span class="btn-wrapper--label ml-1">
                        653
                    </span>
                </a>
                <div>
                    <small class="text-muted mr-1">(21)</small>
                    <font-awesome-icon icon="star" class="text-warning"/>
                    <font-awesome-icon icon="star" class="text-warning"/>
                    <font-awesome-icon icon="star" class="text-warning"/>
                    <font-awesome-icon icon="star" class="text-warning"/>
                    <font-awesome-icon icon="star" class="text-warning"/>
                </div>
            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faComments,
        faGem,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faComments,
        faGem,
        faPlus
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>