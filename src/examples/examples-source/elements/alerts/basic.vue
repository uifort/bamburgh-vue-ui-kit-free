<template>
    <div>
        <b-alert show class="d-flex align-items-center pl-2 align-content-center" variant="success">
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon icon="life-ring"/>
            </span>
            <span>
                <strong class="d-block">Success!</strong> This is a success alert—check it out!
            </span>
        </b-alert>
        <b-alert dismissible show class="d-flex align-items-center pl-2 align-content-center" variant="info">
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon icon="medkit"/>
            </span>
            <span>
                <strong class="d-block">Info!</strong> This is an info alert—check it out!
            </span>
        </b-alert>
        <b-alert show class="d-flex align-items-center pl-2 align-content-center" variant="warning">
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon icon="question-circle"/>
            </span>
            <span>
                <strong class="d-block">Warning!</strong> This is a warning alert—check it out!
            </span>
        </b-alert>
        <b-alert show class="d-flex align-items-center pl-2 align-content-center" variant="danger">
            <span class="font-size-lg d-block d-40 mr-2 text-center">
                <font-awesome-icon icon="headset"/>
            </span>
            <span>
                <strong class="d-block">Danger!</strong> This is an error alert—check it out!
            </span>
        </b-alert>
        <div class="divider my-4"></div>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
        </b-alert>

        <b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
            ></b-progress>
        </b-alert>

        <b-button @click="showAlert" variant="info" class="m-1">
            Show alert with count-down timer
        </b-button>
        <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
            Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
        </b-button>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faHeadset,
        faQuestionCircle,
        faMedkit,
        faLifeRing
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faHeadset,
        faQuestionCircle,
        faMedkit,
        faLifeRing
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>