<template>
    <div>
        <form>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <b-form-group
                            label="First name"
                            label-for="input-1"
                            state="valid"
                    >
                        <b-form-input id="input-1" state="valid" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-md-6 mb-3">
                    <b-form-group
                            label="Last name"
                            label-for="input-2"
                            state="valid"
                    >
                        <b-form-input id="input-2" state="valid" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <b-form-group
                            label="City"
                            label-for="input-3"
                            state="invalid"
                            invalid-feedback="Invalid city"
                    >
                        <b-form-input id="input-3" state="invalid" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-md-3 mb-3">
                    <b-form-group
                            label="State"
                            label-for="input-4"
                            state="invalid"
                            invalid-feedback="Invalid State"
                    >
                        <b-form-input id="input-4" state="invalid" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-md-3 mb-3">
                    <b-form-group
                            label="Zip"
                            label-for="input-5"
                            state="invalid"
                            invalid-feedback="Invalid ZIP Code"
                    >
                        <b-form-input id="input-5" state="invalid" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-6 mb-3">
                    <b-form-group
                            label="Photo ID Scan"
                            label-for="input-6"
                            state="invalid"
                            invalid-feedback="Invalid Photo ID file"
                    >
                        <b-form-file
                                id="input-6"
                                state="invalid"
                                placeholder="Choose a file..."
                                drop-placeholder="Drop file here..."
                        ></b-form-file>
                    </b-form-group>
                </div>
                <div class="col-md-6 mb-3">
                    <b-form-group
                            label="Favourite Number"
                            label-for="input-7"
                            state="invalid"
                            invalid-feedback="Invalid number"
                    >
                        <b-form-select id="input-7" state="invalid" :options="optionsSelect"></b-form-select>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <b-form-checkbox-group
                            v-model="value"
                            :options="options"
                            :state="state"
                            name="checkbox-validation"
                    >
                        <b-form-invalid-feedback :state="state">Please select two</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
                    </b-form-checkbox-group>
                </div>
                <div class="col-md-6">
                    <b-form-radio-group v-model="value2" :options="options2" :state="state2" name="radio-validation">
                        <b-form-invalid-feedback :state="state2">Please select one</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="state2">Thank you</b-form-valid-feedback>
                    </b-form-radio-group>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: [],
                value2: null,
                options2: [
                    { text: 'First radio', value2: 'first' },
                    { text: 'Second radio', value2: 'second' },
                    { text: 'Third radio', value2: 'third' }
                ],
                options: [
                    { text: 'First Check', value: 'first' },
                    { text: 'Second Check', value: 'second' },
                    { text: 'Third Check', value: 'third' }
                ],
                optionsSelect: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: { C: '3PO' }, text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true }
                ]
            }
        },
        computed: {
            state() {
                return this.value.length === 2
            },
            state2() {
                return Boolean(this.value2)
            }
        }
    }
</script>