<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <nav class="navbar navbar-expand-lg p-3 mb-5 mb-md-0 navbar-dark bg-primary rounded">
                    <div class="container">
                        <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                            <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                        </a>
                        <b-navbar-toggle target="nav-inner-primary" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </b-navbar-toggle>
                        <b-collapse is-nav id="nav-inner-primary">
                            <ul class="navbar-nav ml-lg-auto mt-md-0 mt-2">
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0);">Discover
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0);">Profile</a>
                                </li>
                                <b-nav-item-dropdown right>
                                    <template slot="button-content">
                                        Settings
                                    </template>
                                    <b-dropdown-item href="javascript:void(0)">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript:void(0)">Another action</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript:void(0)">Something else here</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </ul>
                        </b-collapse>
                    </div>
                </nav>
            </div>
            <div class="col-md-6">
                <nav class="navbar navbar-expand-lg p-3 mb-5 nav-collapse-alt navbar-dark bg-premium-dark rounded">
                    <div class="container">
                        <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                            <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                        </a>
                        <b-navbar-toggle target="nav-inner-dark" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </b-navbar-toggle>
                        <b-collapse is-nav id="nav-inner-dark">
                            <div class="navbar-collapse-header navbar-light">
                                <div class="text-right">
                                    <b-navbar-toggle target="nav-inner-dark" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </b-navbar-toggle>
                                </div>
                            </div>
                            <ul class="p-3 navbar-nav navbar-nav-dark ml-lg-auto mt-md-0 mt-2">
                                <li class="nav-item">
                                    <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                        <font-awesome-icon class="mr-2" icon="object-group"/>
                                        <span class="d-lg-none">Discover</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                        <font-awesome-icon class="mr-2" icon="parachute-box"/>
                                        <span class="d-lg-none">Profile</span>
                                    </a>
                                </li>
                                <b-nav-item-dropdown right>
                                    <template slot="button-content">
                                        <font-awesome-icon class="mr-2" icon="layer-group"/>
                                        <span class="d-lg-none">Settings</span>
                                    </template>
                                    <b-dropdown-item href="javascript:void(0)">Action</b-dropdown-item>
                                    <b-dropdown-item href="javascript:void(0)">Another action</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="javascript:void(0)">Something else here</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </ul>
                        </b-collapse>
                    </div>
                </nav>
            </div>
        </div>

    </div>
</template>


<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faParachuteBox,
        faLayerGroup,
        faObjectGroup,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faParachuteBox,
        faLayerGroup,
        faObjectGroup,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>