<template>
    <div>
        <b-button variant="outline-primary" v-b-tooltip.top title="Tooltip on top">
            Tooltip on top
        </b-button>
        <b-button variant="outline-primary" v-b-tooltip.right title="Tooltip on right">
            Tooltip on right
        </b-button>
        <b-button variant="outline-primary" v-b-tooltip data-placement="bottom" title="Tooltip on bottom">
            Tooltip on bottom
        </b-button>
        <b-button variant="outline-primary" v-b-tooltip data-placement="left" title="Tooltip on left">
            Tooltip on left
        </b-button>
        <b-button id="tooltipHTML" variant="outline-primary">
            Tooltip with HTML
        </b-button>
        <b-tooltip target="tooltipHTML">
            <em>Tooltip</em> <u class="px-1">with</u> <b>HTML</b>
        </b-tooltip>
    </div>
</template>