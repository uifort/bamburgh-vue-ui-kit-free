<template>
    <div>
        <b-button variant="outline-primary" id="popoverPosition1">
            Popover on top
        </b-button>
        <b-popover triggers="hover" target="popoverPosition1" placement="top">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </b-popover>

        <b-button variant="outline-primary" id="popoverPosition2">
            Popover on right
        </b-button>
        <b-popover triggers="hover" target="popoverPosition2" placement="right">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </b-popover>

        <b-button variant="outline-primary" id="popoverPosition3">
            Popover on bottom
        </b-button>
        <b-popover triggers="hover" target="popoverPosition3" placement="bottom">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </b-popover>

        <b-button variant="outline-primary" id="popoverPosition4">
            Popover on left
        </b-button>
        <b-popover triggers="hover" target="popoverPosition4" placement="left">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </b-popover>

    </div>
</template>