<template>
    <span>
        <button v-on:click="rollDice($event)"><slot>{{details}}</slot>: <strong><span v-html="this.results"></span></strong></button>
    </span>
</template>

<script>
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
            results: 0
        }
    },
    computed: {
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
            let result = 0
            for (let i=0; i < this.numDice; i++) {
                result += Math.floor(Math.random()* this.dieType) + 1
            }
            result += this.modifier
            this.results = result
        }
    }
}
</script>