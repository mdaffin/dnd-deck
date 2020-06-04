<template>
    <div>
        <button @click="rollDice">Roll Dice</button>
        <h3>{{details}} <span v-html="this.results"></span></h3>
    </div>
</template>

<script>
export default {
    name: 'DiceRoller',
    props: {
        numDice: {
            type: Number,
            required: true,
            default: 1
        },
        dieType: {
            type: Number,
            required: true,
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
                details += String(this.modifier)
            }
            else if (this.modifier > 0) {
                details += `+${this.modifier}`
            }
            this.results = 0
            return details
        }
    },
    methods: {
        rollDice() {
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

<style scoped>
.card {
    display: inline-block;
    width: auto;
    background: #FFF;
    border: 1px solid black;
    border-radius: .5em;
    padding: 1em;
    margin: 1em;
}

.form-group {
    width: 15em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
}

.form-input {
    width: 5em;
}
</style>
