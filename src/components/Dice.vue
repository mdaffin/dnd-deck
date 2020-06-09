<template>
<Tooltip>
        <button v-on:click="rollDice($event)"><slot>{{details}}</slot>: <strong><span v-html="this.results"></span></strong></button>
        <template v-slot:tooltiptext>
            {{diceValues}}
        </template>
</Tooltip>
</template>

<script>
import Tooltip from "@/components/Tooltip.vue"
export default {
    name: 'Dice',
    props: {
        numDice: {
            type: Number,
            default: 1
        },
        dieType: {
            type: Number,
            default: 20
        },
        modifier: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            results: 0,
            rolls: []
        }
    },
    components: {
        Tooltip
    },
    computed: {
        diceValues() {
            let text = "rolls: "
            if (this.rolls.length > 1) {
                return this.rolls.reduce((text, val) => `${text}` + `${val}, `, text)
            }
            else if (this.rolls.length == 1){
                return text + `${this.rolls[0]}`
            }
        },
        details() {
            let details = `${this.numDice}d${this.dieType}`
            if (this.modifier < 0) {
                details += `${this.modifier}`
            }
            else if (this.modifier > 0) {
                details += `+${this.modifier}`
            }
            this.results = 0
            return details
        }
    },
    methods: {
        rollDice(event) {
            if (this.numDice <= 0) {
                throw new RangeError("The number of dice cannot be <= 0")
            }
            if (this.dieType <= 0){
                throw new RangeError("The die type cannot be <= 0")
            }
            this.rolls = Array(this.numDice).fill(Math.floor(Math.random()*this.dieType)+1)
            this.results = this.rolls.reduce((sum, val) => sum + val, 0) + this.modifier
        }
    }
}
</script>