<template>
    <div>
        <b-row class="mt-2">
            <b-col lg="6" md="12">
                <div class="heading-3">Seamless</div>
                <b-row>
                    <b-col md="6">
                        <b-form-group>
                            <b-input-group class="input-group-seamless" size="sm">
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group class="input-group-seamless">
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group class="input-group-seamless" size="lg">
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group>
                            <b-input-group class="input-group-seamless" size="sm">
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group class="input-group-seamless">
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group class="input-group-seamless" size="lg">
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" md="12">
                <div class="heading-3">Basic</div>
                <b-row>
                    <b-col md="6">
                        <b-form-group>
                            <b-input-group size="sm">
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group>
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group size="lg">
                                <b-form-input placeholder="Search"></b-form-input>
                                <b-input-group-text slot="prepend">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group>
                            <b-input-group size="sm">
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group>
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group size="lg">
                                <b-input-group-text slot="append">
                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                </b-input-group-text>
                                <b-form-input placeholder="Search"></b-form-input>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCalendar,
        faUser
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCalendar,
        faUser
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>