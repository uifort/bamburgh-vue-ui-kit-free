<template>
    <div>
        <div class="hero-wrapper bg-composed-wrapper bg-slick-carbon">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
                <div class="bg-composed-wrapper--image opacity-3" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-8.jpg') + ')' }"></div>
                <div class="bg-composed-wrapper--bg bg-first opacity-3"></div>
                <div class="bg-composed-wrapper--content py-5">
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center">
                                <div class="text-white text-center text-lg-left">
                                    <h1 class="display-3 mb-3 font-weight-bold">
                                        Bootstrap 4 Carousel
                                    </h1>
                                    <p class="font-size-lg d-block mb-5 text-white-50">
                                        This is an example Bootstrap carousel integrated into one of our hero sections!
                                    </p>
                                    <div>
                                        <b-button variant="success" v-b-tooltip="'Dummy tooltip example'">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon icon="gem"/>
                                            </span>
                                        </b-button>
                                        <b-button variant="outline-secondary" class="ml-3" v-b-tooltip="'View available downloads'">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon icon="download"/>
                                            </span>
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center">
                                <div class="card mt-5 mt-lg-0">
                                    <div class="p-3">
                                        <b-carousel
                                                id="carousel-1"
                                                v-model="slide"
                                                :interval="4000"
                                                controls
                                                indicators
                                                background="#ababab"
                                                img-width="1024"
                                                img-height="480"
                                        >
                                            <!-- Text slides with image -->
                                            <b-carousel-slide>
                                                <img
                                                        slot="img"
                                                        class="d-block img-fluid w-100"
                                                        src="@/assets/img/stock-photos/stock-1.jpg"
                                                        alt="image slot"
                                                >
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <img
                                                        slot="img"
                                                        class="d-block img-fluid w-100"
                                                        src="@/assets/img/stock-photos/stock-2.jpg"
                                                        alt="image slot"
                                                >
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <img
                                                        slot="img"
                                                        class="d-block img-fluid w-100"
                                                        src="@/assets/img/stock-photos/stock-3.jpg"
                                                        alt="image slot"
                                                >
                                            </b-carousel-slide>
                                        </b-carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faDownload
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faDownload
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
    }
</script>