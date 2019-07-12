<template>
    <div>
        <div class="hero-wrapper bg-composed-wrapper bg-second min-vh-100">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
                <div class="bg-composed-wrapper--image bg-composed-filter-rm opacity-2" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-9.jpg') + ')' }"></div>
                <div class="bg-composed-wrapper--bg bg-happy-green opacity-1"></div>
                <div class="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                    <div class="container pb-5">
                        <div class="row">
                            <div class="col-lg-8 px-0 mx-auto d-flex align-items-center">
                                <div class="text-center">
                                    <a href="https://uifort.com" target="_blank" title="UiFort">
                                        <img src="@/assets/img/logo-uifort.png" alt="UiFort">
                                    </a>
                                    <div class="px-5 px-sm-0 text-white">
                                        <h1 class="display-2 mt-4 mb-3 font-weight-bold">
                                            Bamburgh Vuejs UI Kit FREE
                                        </h1>
                                        <p class="mb-5 mt-3">
                                            <span class="badge badge-pill text-success px-4 h-auto py-1">Vue.js 2</span>
                                            <span class="badge badge-pill text-success px-4 h-auto py-1">VueCLI</span>
                                            <span class="badge badge-pill text-success px-4 h-auto py-1">Bootstrap</span>
                                            <span class="badge badge-pill text-success px-4 h-auto py-1">BootstrapVue</span>
                                        </p>
                                        <p class="font-size-xl opacity-6 mb-3">
                                            This UI Kit is part of our <b>Bamburgh UI System</b> and it's totally free. More than that, it features the most common and useful elements, styles and components that will help you quickly bootstrap your project.
                                        </p>
                                        <div class="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50"></div>
                                        <div>
                                            <a href="#bamburg-uikit-contents" class="btn btn-lg btn-outline-warning d-block d-sm-inline-block shadow-none">
                                                What's included
                                            </a>
                                            <a href="https://uifort.com/free-ui-kits/bamburgh-ui-kit-free.html" target="_blank" class="btn btn-lg shadow-none btn-outline-success d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0" title="Bamburgh UI Kit FREE product page">
                                                <span class="btn-wrapper--icon">
                                                    <font-awesome-icon icon="download"/>
                                                </span>
                                                <span class="btn-wrapper--label">
                                                    Download now
                                                </span>
                                            </a>
                                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" target="_blank" class="btn btn-lg btn-outline-first shadow-none d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0" title="Bamburgh Vue UI Kit PRO version">
                                                <span class="btn-wrapper--icon">
                                                    <font-awesome-icon icon="external-link-alt"/>
                                                </span>
                                                <span class="btn-wrapper--label">
                                                    PRO Version
                                                </span>
                                            </a>
                                        </div>
                                        <small class="d-block pt-4 text-white-50">For a comprehensive list of components &amp; commercial licenses, we recommend the PRO version.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <p class="text-white mb-0 py-5 font-size-lg">Just like the PRO version, <b>Bamburgh Vue.js UI Kit</b> features an extensive documentation available online.</p>
            </div>
        </div>
        <div class="py-5 bg-secondary" id="bamburg-uikit-contents">
            <div class="container py-5">
                <div class="text-center py-5">
                    <h3 class="display-3 mb-2 font-weight-bold">
                        What's included
                    </h3>
                    <p class="font-size-lg mb-5 text-black-50">
                        We split the UI kit components into logical categories as follows below.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card p-5 mb-5 text-white bg-royal">
                            <div class="card-badges">
                                <a href="https://uifort.com/free-ui-kits/bamburgh-vue-ui-kit-free.html" target="_blank" class="d-50 d-block bg-neutral-danger rounded-circle shadow-none text-center" v-b-tooltip title="Some elements are not available in the free version!">
                                    <font-awesome-icon icon="unlock-alt" class="text-danger font-size-md"/>
                                </a>
                            </div>
                            <div class="bg-grow-early text-center text-white font-size-xl d-50 rounded">
                                <i class="fas fa-shapes"></i>
                                <font-awesome-icon icon="shapes"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">UI Elements</h3>
                            <p class="text-white-50 mt-2">
                                Bamburgh features easy to use, easy to integrate user interface elements.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card p-5 mb-5 bg-royal text-white">
                            <div class="card-badges">
                                <a href="https://uifort.com/free-ui-kits/bamburgh-vue-ui-kit-free.html" target="_blank" class="d-50 d-block bg-neutral-danger rounded-circle shadow-none text-center" v-b-tooltip title="Some elements are not available in the free version!">
                                    <font-awesome-icon icon="unlock-alt" class="text-danger font-size-md"/>
                                </a>
                            </div>
                            <div class="bg-ripe-malin text-center text-white font-size-xl d-50 rounded">
                                <font-awesome-icon icon="align-center"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Forms</h3>
                            <p class="text-white-50 mt-2">
                                Basic stuff to get you started in 'style' with building your form elements.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card p-5 mb-5 bg-royal text-white">
                            <div class="card-badges">
                                <a href="https://uifort.com/free-ui-kits/bamburgh-vue-ui-kit-free.html" target="_blank" class="d-50 d-block bg-neutral-danger rounded-circle shadow-none text-center" v-b-tooltip title="Some elements are not available in the free version!">
                                    <font-awesome-icon icon="unlock-alt" class="text-danger font-size-md"/>
                                </a>
                            </div>
                            <div class="bg-malibu-beach text-center text-white font-size-xl d-50 rounded">
                                <font-awesome-icon icon="table"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Tables</h3>
                            <p class="text-white-50 mt-2">
                                We've set up a few tables examples, based on Bootstrap 4, but styled with our design.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card mb-5 bg-royal">
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" target="_blank" class="p-5 card-img-wrapper rounded text-white">
                                <div class="img-wrapper-overlay">
                                    <div class="overlay-btn-wrapper">
                                        <div class="p-3">
                                            <i class="fas fa-lock d-block mx-auto mb-3 text-white-50 font-size-xxl" title="These features are only in Bamburgh Vue UI Kit PRO"></i>
                                            These features are only available in Bamburgh Vue UI Kit PRO
                                        </div>
                                    </div>
                                </div>
                                <div class="card-badges">
                                    <div class="d-50 bg-secondary rounded-circle shadow-none border-2 border-light text-center" v-b-tooltip title="These features are only in Bamburgh Vue UI Kit PRO">
                                        <font-awesome-icon icon="lock" class="text-black font-size-md"/>
                                    </div>
                                </div>
                                <div class="bg-arielle-smile text-center text-white font-size-xl d-50 rounded">
                                    <font-awesome-icon icon="map-marked-alt"/>
                                </div>
                                <h3 class="font-size-lg font-weight-bold mt-4">Maps</h3>
                                <p class="text-white-50 mt-2">
                                    We've included only the most popular solutions included because we also don't want bloated code
                                    in our apps and sites.
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card mb-5 bg-royal">
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" target="_blank" class="p-5 card-img-wrapper rounded text-white">
                                <div class="img-wrapper-overlay">
                                    <div class="overlay-btn-wrapper">
                                        <div class="p-3">
                                            <i class="fas fa-lock d-block mx-auto mb-3 text-white-50 font-size-xxl" title="These features are only in Bamburgh Vue UI Kit PRO"></i>
                                            These features are only available in Bamburgh Vue UI Kit PRO
                                        </div>
                                    </div>
                                </div>
                                <div class="card-badges">
                                    <div class="d-50 bg-secondary rounded-circle shadow-none border-2 border-light text-center" v-b-tooltip title="These features are only in Bamburgh Vue UI Kit PRO">
                                        <font-awesome-icon icon="lock" class="text-black font-size-md"/>
                                    </div>
                                </div>
                                <div class="bg-strong-bliss text-center text-white font-size-xl d-50 rounded">
                                    <font-awesome-icon icon="layer-group"/>
                                </div>
                                <h3 class="font-size-lg font-weight-bold mt-4">Presentation blocks</h3>
                                <p class="text-white-50 mt-2">
                                    Testimonials, pricing tables, hero sections and more. Built with UX in mind, beautiful modern
                                    designs and always fully responsive.
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card mb-5 bg-royal">
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" target="_blank" class="p-5 card-img-wrapper rounded text-white">
                                <div class="img-wrapper-overlay">
                                    <div class="overlay-btn-wrapper">
                                        <div class="p-3">
                                            <i class="fas fa-lock d-block mx-auto mb-3 text-white-50 font-size-xxl" title="These features are only in Bamburgh Vue UI Kit PRO"></i>
                                            These features are only available in Bamburgh Vue UI Kit PRO
                                        </div>
                                    </div>
                                </div>
                                <div class="card-badges">
                                    <div class="d-50 bg-secondary rounded-circle shadow-none border-2 border-light text-center" v-b-tooltip title="These features are only in Bamburgh Vue UI Kit PRO">
                                        <font-awesome-icon icon="lock" class="text-black font-size-md"/>
                                    </div>
                                </div>
                                <div class="bg-plum-plate text-center text-white font-size-xl d-50 rounded">
                                    <font-awesome-icon icon="sitemap"/>
                                </div>
                                <h3 class="font-size-lg font-weight-bold mt-4">Landing pages</h3>
                                <p class="text-white-50 mt-2">
                                    We put together some presentation blocks to create these awesome landing pages. Create your own,
                                    with examples from documentation.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <Icons/>
        </div>
        <div class="demo-elements-wrapper">
            <div class="demo-stick-nav d-flex align-items-center stick-parent" v-stick-in-parent>
                <div class="container d-flex justify-content-end">
                    <div class="d-flex align-items-center">
                        <div class="sticky-btn">
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" target="_blank" class="btn btn-outline-second mr-2">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="external-link-alt"/>
                                </span>
                                <span class="btn-wrapper--label">PRO <span class="d-none d-sm-inline">Version</span></span>
                            </a>
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-free-docs" target="_blank" class="btn btn-outline-info mr-2">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="book"/>
                                </span>
                                <span class="btn-wrapper--label d-none d-sm-inline">Docs</span>
                            </a>
                            <a href="https://uifort.com/free-ui-kits/bamburgh-vue-ui-kit-free.html" target="_blank" class="btn btn-success" v-b-tooltip title="Download now">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="download"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="demo-colors" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Colors
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container pb-5">
                        Colors
                    </div>
                </h2>
                <div class="container">
                    <Colors/>
                </div>
            </div>
            <div id="demo-buttons" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Buttons
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Buttons
                    </div>
                </h2>
                <div class="container">
                    <Buttons/>
                </div>
            </div>

            <div id="demo-badges" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Badges
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Badges
                    </div>
                </h2>
                <div class="container">
                    <Badges/>
                </div>
            </div>

            <div id="demo-progress-bars" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Progress bars
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Progress bars
                    </div>
                </h2>
                <div class="container">
                    <ProgressBars/>
                </div>
            </div>

            <div id="demo-pagination" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Pagination
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Pagination
                    </div>
                </h2>
                <div class="container">
                    <Pagination/>
                </div>
            </div>

            <div id="demo-navigation" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Navigation
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Navigation
                    </div>
                </h2>
                <div class="container">
                    <Navigation/>
                </div>
            </div>

            <div id="demo-alerts" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Alerts
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Alerts
                    </div>
                </h2>
                <div class="container">
                    <Alerts/>
                </div>
            </div>

            <div id="demo-forms" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Forms
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Forms
                    </div>
                </h2>
                <div class="container">
                    <Forms/>
                </div>
            </div>

            <div id="demo-spinners" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Images, spinners &amp; toasts
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Images, spinners &amp; toasts
                    </div>
                </h2>
                <div class="container">
                    <Others/>
                </div>
            </div>
            <div id="demo-cards" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Cards
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container pb-5">
                        Cards
                    </div>
                </h2>
                <Cards/>
            </div>

            <div id="demo-lists" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Lists
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Lists
                    </div>
                </h2>
                <Lists/>
            </div>

            <div id="demo-modals" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Modals
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Modals
                    </div>
                </h2>
                <div class="container">
                    <Modals/>
                </div>
            </div>

            <div id="demo-tooltips" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Tooltips
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Tooltips
                    </div>
                </h2>
                <div class="container">
                    <Tooltips/>
                </div>
            </div>

            <div id="demo-popovers" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Popovers
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Popovers
                    </div>
                </h2>
                <div class="container">
                    <Popovers/>
                </div>
            </div>

            <div id="demo-carousels" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Carousels
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Carousels
                    </div>
                </h2>
                <Carousels/>
            </div>

            <div id="demo-dropdowns" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Dropdowns
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Dropdowns
                    </div>
                </h2>
                <div class="container">
                    <Dropdowns/>
                </div>
            </div>

            <div id="demo-tabs" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Tabs
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Tabs
                    </div>
                </h2>
                <div class="container">
                    <Tabs/>
                </div>
            </div>
            <div id="demo-tables" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Regular tables
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container pb-5">
                        Regular tables
                    </div>
                </h2>
                <div class="container">
                    <Regular></Regular>
                </div>
            </div>

            <div id="demo-charts" class="demo-example-wrapper">
                <h2 class="heading-1 d-flex align-items-center stick-parent" v-stick-in-parent>
                    <div class="container">
                        Charts
                    </div>
                </h2>
                <h2 class="heading-1 d-flex align-items-center">
                    <div class="container py-5">
                        Charts
                    </div>
                </h2>
                <div class="container">
                    <Charts/>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faQuestionCircle,
        faStar,
        faQuoteRight,
        faArrowRight,
        faExternalLinkAlt,
        faDownload,
        faBook,
        faLock,
        faShapes,
        faAlignCenter,
        faTable,
        faMapMarkedAlt,
        faSitemap
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faFacebookSquare,
        faTwitterSquare,
        faDribbble,
        faGithubSquare,
        faAngular,
        faVuejs,
        faReact,
        faHtml5,
        faFacebook,
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faQuestionCircle,
        faStar,
        faQuoteRight,
        faArrowRight,
        faFacebookSquare,
        faTwitterSquare,
        faDribbble,
        faGithubSquare,
        faAngular,
        faVuejs,
        faReact,
        faHtml5,
        faExternalLinkAlt,
        faDownload,
        faBook,
        faLock,
        faFacebook,
        faShapes,
        faAlignCenter,
        faTable,
        faMapMarkedAlt,
        faSitemap
    );

    import Colors from '../examples/ui-elements/colors';
    import Buttons from '../examples/ui-elements/buttons';
    import Badges from '../examples/ui-elements/badges';
    import ProgressBars from '../examples/ui-elements/progress-bars';
    import Pagination from '../examples/ui-elements/pagination';
    import Navigation from '../examples/ui-elements/navigation';
    import Alerts from '../examples/ui-elements/alerts';
    import Forms from '../examples/ui-elements/forms';
    import Others from '../examples/ui-elements/others';
    import Icons from '../examples/ui-elements/icons';
    import Cards from '../examples/ui-elements/cards';
    import Lists from '../examples/ui-elements/lists';
    import Modals from '../examples/ui-elements/modals';
    import Tooltips from '../examples/ui-elements/tooltips';
    import Popovers from '../examples/ui-elements/popovers';
    import Carousels from '../examples/ui-elements/carousels';
    import Dropdowns from '../examples/ui-elements/dropdowns';
    import Tabs from '../examples/ui-elements/tabs';
    import Charts from '../examples/ui-elements/charts';
    import Regular from '../examples/tables/regular-tables';

    export default {
        name: 'home',
        components: {
            Regular,
            Colors,
            Buttons,
            Badges,
            ProgressBars,
            Pagination,
            Navigation,
            Alerts,
            Forms,
            Others,
            Icons,
            Cards,
            Lists,
            Modals,
            Tooltips,
            Popovers,
            Carousels,
            Dropdowns,
            Tabs,
            Charts,
            'font-awesome-icon': FontAwesomeIcon,
        }
    }
</script>
