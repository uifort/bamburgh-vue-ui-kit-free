<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="bg-second rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="nav-collapse" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="nav-collapse">
                    <ul class="navbar-nav ml-lg-auto mt-lg-0 mt-3 px-lg-0 px-3 py-3 py-md-0">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon icon="object-group"/>
                                <span class="pl-2 d-lg-none">Discover</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon icon="parachute-box"/>
                                <span class="pl-2 d-lg-none">Profile</span>
                            </a>
                        </li>
                        <b-nav-item-dropdown right>
                            <template slot="button-content">
                                <font-awesome-icon icon="envelope-open-text"/>
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
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" class="bg-primary mt-4 rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="nav-primary" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="nav-primary">
                    <ul class="navbar-nav ml-lg-auto mt-lg-0 mt-3 px-lg-0 px-3 py-3 py-md-0">
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
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" class="bg-asteroid mt-4 rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="nav-asteroid" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="nav-asteroid">
                    <ul class="navbar-nav ml-lg-auto mt-lg-0 mt-3 px-lg-0 px-3 py-3 py-md-0">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon icon="object-group"/>
                                <span class="pl-2 d-lg-none">Favorites</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon icon="pager"/>
                                <span class="pl-2 d-lg-none">Another action</span>
                            </a>
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
        </b-navbar>
        <b-navbar toggleable="lg" type="light" class="bg-sunny-morning mt-4 rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="navbar-morning" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="navbar-morning">
                    <ul class="navbar-nav ml-lg-auto mt-lg-0 mt-3 px-lg-0 px-3 py-3 py-md-0">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                <span class="pl-2 d-lg-none">Facebook</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                <span class="pl-2 d-lg-none">Twitter</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'google-plus']" />
                                <span class="pl-2 d-lg-none">Google +</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                                <span class="pl-2 d-lg-none">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </b-collapse>
            </div>
        </b-navbar>
        <b-navbar toggleable="lg" type="light" class="bg-warning mt-4 rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="navbar-warning" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="navbar-warning">
                    <ul class="navbar-nav align-items-lg-center mt-lg-0 mt-3 ml-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                <span class="pl-2 d-lg-none">Share</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                <span class="pl-2 d-lg-none">Tweet</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'pinterest']" />
                                <span class="pl-2 d-lg-none">Pinterest</span>
                            </a>
                        </li>
                    </ul>
                </b-collapse>
            </div>
        </b-navbar>
        <b-navbar toggleable="lg" type="light" class="bg-info mt-4 rounded p-3">
            <div class="container">
                <a class="navbar-brand d-40 bg-white rounded-circle text-center" href="javascript:void(0);">
                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                </a>
                <b-navbar-toggle target="navbar-info" class="navbar-toggler is-active collapsed hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </b-navbar-toggle>
                <b-collapse is-nav id="navbar-info">
                    <ul class="navbar-nav ml-lg-auto mt-lg-0 mt-3 px-lg-0 px-3 py-3 py-md-0">
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                <span class="pl-2 nav-link-inner--text">Facebook</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                <span class="pl-2 nav-link-inner--text">Twitter</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-icon" href="javascript:void(0);">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                                <span class="pl-2 nav-link-inner--text">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </b-collapse>
            </div>
        </b-navbar>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEnvelopeOpenText,
        faParachuteBox,
        faObjectGroup,
        faPager
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faFacebookSquare,
        faTwitter,
        faDribbble,
        faPinterest,
        faInstagram,
        faGooglePlus
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEnvelopeOpenText,
        faParachuteBox,
        faObjectGroup,
        faPager,
        faFacebookSquare,
        faTwitter,
        faDribbble,
        faPinterest,
        faGooglePlus,
        faInstagram
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>