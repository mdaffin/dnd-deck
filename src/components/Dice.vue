<template>
    <div>
        <button v-on:click="rollDice($event)"><slot>{{details}}</slot></button>
        <span class="tooltiptext" v-if='this.rolls.length' v-on:click="reset()">
            <strong>
                Rolled: <span v-html="this.results"></span>
                {{diceValues}}
            </strong>
        </span>
    </div>
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
            results: 0,
            rolls: []
        }
    },
    computed: {
        diceValues() {
            let details = " = "
            if (this.rolls.lenght < 0){
                return ""
            }

            if (this.rolls.length > 1) {
                details += `( ${this.rolls.reduce((text, val) => `${text} + ${val} `)} )`
            }
            else if (this.rolls.length == 1){
                details += `${this.rolls[0]}`
            }

            if (this.modifier < 0) {
                details += ` ${this.modifier}`
            }
            else if (this.modifier > 0) {
                details += ` + ${this.modifier}`
            }
            return details
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
        reset() {
            this.rolls=[]
        },
        rollDice(event) {
            if (this.numDice <= 0) {
                throw new RangeError("The number of dice cannot be <= 0")
            }
            if (this.dieType <= 0){
                throw new RangeError("The die type cannot be <= 0")
            }
            this.rolls = []
            for (let i=0; i < this.numDice; ++i){
                this.rolls.push(Math.floor(Math.random()*this.dieType)+1)
            }
            this.results = this.rolls.reduce((sum, val) => sum + val, 0) + this.modifier
        }
    }
}
</script>

<style scoped>
.tooltiptext {
  display: inline-block;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
</style>