<template>
    <div>
        <b-button variant="primary" v-b-modal="'modal-b4'">Open Example</b-button>
        <b-modal id="modal-b4" title="Example Modal" centered>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="link" class="btn-link-dark">Close</b-button>
                <b-button variant="primary">Save changes</b-button>
            </div>
        </b-modal>

        <b-button variant="primary" v-b-modal="'modal-b3'">Inner Scroll</b-button>
        <b-modal title="Inner scrollable modal" id="modal-b3" scrollable>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="link" class="btn-link-dark mr-2">Close</b-button>
                <b-button variant="primary">Save changes</b-button>
            </div>
        </b-modal>

        <b-button variant="primary" v-b-modal="'modal-b1'">Large Modal</b-button>
        <b-modal title="Large modal dialog" id="modal-b1" size="xl" centered>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div slot="modal-footer">
                <b-button variant="link" class="btn-link-dark mr-2">Close</b-button>
                <b-button variant="primary">Save changes</b-button>
            </div>
        </b-modal>

        <b-button variant="primary" v-b-modal="'modal-b2'">Form Modal</b-button>
        <b-modal id="modal-b2" :hide-footer="true" :hide-header="true" centered>
            <div class="card shadow-none border-0">
                <div class="card-header bg-white pb-5">
                    <div class="text-muted text-center mb-3">
                        <small>Sign in with</small>
                    </div>
                    <div class="text-center">
                        <b-button variant="facebook" class="mr-2">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </span>
                            <span class="btn-wrapper--label">
                                Facebook
                            </span>
                        </b-button>
                        <b-button variant="twitter" class="ml-2">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </span>
                            <span class="btn-wrapper--label">
                                Twitter
                            </span>
                        </b-button>
                    </div>
                </div>
                <div class="card-body bg-secondary rounded px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                    </div>
                    <form role="form">
                        <b-form-group>
                            <b-input-group>
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="envelope"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group>
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="unlock-alt"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-checkbox>
                            Remember me
                        </b-form-checkbox>
                        <div class="text-center">
                            <b-button variant="second" class="my-4">Sign in</b-button>
                        </div>
                    </form>
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faUnlockAlt,
        faEnvelope
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faUnlockAlt,
        faEnvelope
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>