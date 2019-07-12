<template>
    <div>
        <b-list-group class="mb-5">
            <a href="javascript:void(0);" class="list-group-item d-flex justify-content-between align-items-center">
                View available rooms
                <span>
                    <font-awesome-icon icon="angle-right"/>
                </span>
            </a>
            <a href="javascript:void(0);" class="list-group-item d-flex justify-content-between align-items-center">
                Book a room
                <span>
                    <font-awesome-icon icon="angle-right"/>
                </span>
            </a>
            <a href="javascript:void(0);" class="list-group-item d-flex justify-content-between align-items-center">
                Search for a castle
                <span>
                    <font-awesome-icon icon="angle-right"/>
                </span>
            </a>
            <b-list-group-item class="d-flex bg-light justify-content-between align-items-center">
                Finish today's tasks
                <span class="badge badge-neutral-success text-success">NEW Task</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex bg-light justify-content-between align-items-center">
                Attend Java training
                <small class="d-block">
                    19<sup>th</sup> September
                    <font-awesome-icon icon="clock" class="ml-1"/>
                </small>
            </b-list-group-item>
        </b-list-group>
        <b-list-group class="mb-5">
            <b-list-group-item class="d-flex justify-content-between bg-light align-items-center">
                <div class="avatar-icon-wrapper avatar-icon-lg">
                    <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                </div>
                <div class="flex-grow-1 pl-2">
                    <h5 class="mt-0 mb-1">John Doe</h5>
                    <p class="card-text mb-0">
                        This is a short bio for John's widget...
                    </p>
                </div>
                <span class="pl-3">
                    <b-button size="sm" variant="second" class="pl-2 pr-2">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon icon="cog"/>
                        </span>
                    </b-button>
                </span>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Fortifications in Europe
                <span class="badge badge-neutral-primary badge-pill">21</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Popular castles
                <span class="badge badge-neutral-success badge-pill">76</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                Famous forts
                <span class="badge badge-neutral-danger badge-pill">34</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div class="w-100">
                    <div class="d-flex flex-wrap justify-content-between mb-2">
                        <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                        <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                    </div>
                    <h6 class="pt-1 pb-1">
                        <a href="javascript:void(0);" class="badge badge-pill badge-neutral-warning text-warning">New report generated</a>
                    </h6>
                    <p class="mb-3">This is a dummy text acting like a small description for the above title...</p>
                    <div class="mt-3 mb-2">
                        <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-1.jpg" alt="Rounded image" width="70" class="img-fluid rounded mr-3 shadow-sm"></a>
                        <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-3.jpg" alt="Rounded image" width="70" class="img-fluid rounded shadow-sm"></a>
                    </div>
                </div>
            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCog,
        faClock,
        faAngleRight,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCog,
        faClock,
        faAngleRight,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>