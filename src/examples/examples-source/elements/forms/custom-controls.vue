<template>
    <div>
        <div class="row mt-2">
            <div class="col-lg-3 col-md-4">
                <div class="heading-3">Checkbox</div>
                <div class="card mb-5">
                    <div class="card-body py-2">
                        <b-form-group>
                            <template slot="label">
                                <b-form-checkbox
                                        v-model="allSelected"
                                        :indeterminate="indeterminate"
                                        aria-describedby="flavours"
                                        aria-controls="flavours"
                                        @change="toggleAll"
                                >
                                    {{ allSelected ? 'Un-select All' : 'Select All' }}
                                </b-form-checkbox>
                            </template>

                            <b-form-checkbox-group
                                    id="flavors"
                                    v-model="selected"
                                    :options="flavours"
                                    name="flavors"
                                    class="ml-4"
                                    aria-label="Individual flavours"
                                    stacked
                            ></b-form-checkbox-group>
                        </b-form-group>

                        <small class="d-block">
                            Selected: <strong>{{ selected }}</strong><br>
                            All Selected: <strong>{{ allSelected }}</strong><br>
                            Indeterminate: <strong>{{ indeterminate }}</strong>
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4">
                <div class="heading-3">Radio</div>
                <div class="card mb-5">
                    <div class="card-body py-2">
                        <b-form-group label="Individual radios">
                            <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="A">Enjoy cabbage</b-form-radio>
                            <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="B">Enjoy tomatoes</b-form-radio>
                            <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="C">Enjoy broccoli</b-form-radio>
                            <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="D">Enjoy carrots</b-form-radio>
                            <b-form-radio class="my-1" v-model="selectedRadio" name="some-radios" value="E">Enjoy green peas</b-form-radio>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4">
                <div class="heading-3">Toggle</div>
                <div class="card mb-5">
                    <div class="card-body py-2">
                        <b-form-checkbox class="my-3" name="check-button" switch>
                            Example toggle
                        </b-form-checkbox>
                        <b-form-checkbox class="my-3" name="check-button" switch>
                            Switch button
                        </b-form-checkbox>
                        <b-form-checkbox disabled class="my-3" name="check-button" switch>
                            Disabled switch
                        </b-form-checkbox>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="heading-3">Slider</div>
                <div class="card mb-5">
                    <div class="card-body py-2">
                        <div class="my-3">
                            <b-form-input type="range" id="customRange1"></b-form-input>
                        </div>
                        <div class="my-3">
                            <b-form-input type="range" min="0" max="5" id="customRange2"></b-form-input>
                        </div>
                        <div class="my-3">
                            <b-form-input type="range" min="0" max="5" step="0.5" id="customRange3"></b-form-input>
                        </div>
                        <div class="my-3">
                            <b-form-input type="range" disabled min="0" max="5" id="customRange2"></b-form-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-sm-12 custom-dropdown-example">
                <h6 class="text-muted mb-2">Custom Dropdown</h6>
                <fieldset class="mb-5">
                    <b-form-select :options="optionsSelect"></b-form-select>
                </fieldset>
            </div>
            <div class="col-lg-6 col-sm-12">
                <h6 class="text-muted mb-2">Custom File Input</h6>
                <b-form-file
                        v-model="file"
                        :state="Boolean(file)"
                        placeholder="Choose a file..."
                        drop-placeholder="Drop file here..."
                ></b-form-file>
                <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                flavours: ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry'],
                selected: [],
                allSelected: false,
                indeterminate: false,
                selectedRadio: '',
                file: null,
                file2: null,
                optionsSelect: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: { C: '3PO' }, text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true }
                ]
            }
        },
        methods: {
            toggleAll(checked) {
                this.selected = checked ? this.flavours.slice() : []
            }
        },
        watch: {
            selected(newVal, oldVal) {
                // Handle changes in individual flavour checkboxes
                if (newVal.length === 0) {
                    this.indeterminate = false
                    this.allSelected = false
                } else if (newVal.length === this.flavours.length) {
                    this.indeterminate = false
                    this.allSelected = true
                } else {
                    this.indeterminate = true
                    this.allSelected = false
                }
            }
        }
    }
</script>