<<<<<<< HEAD
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
=======
<template>
  <div>
    <button v-on:click="rollDice()">
      <slot>{{ details }}</slot>
    </button>
    <span class="tooltiptext" v-if="this.rolls.length" v-on:click="reset()">
      <strong>
        Rolled: <span v-html="results"></span>
        {{ diceValues }}
      </strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "Dice",
  props: {
    numDice: {
      type: Number,
      default: 1,
    },
    dieType: {
      type: Number,
      default: 20,
    },
    modifier: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rolls: [],
    };
  },
  computed: {
    results() {
      return this.rolls.reduce((sum, val) => (sum += val)) + this.modifier;
    },
    diceValues() {
      let details = " = ";
      if (this.rolls.length > 1) {
        details += `( ${this.rolls.join(" + ")} )`;
      } else if (this.rolls.length == 1) {
        details += `${this.rolls[0]}`;
      }

      if (this.modifier < 0) {
        details += ` ${this.modifier}`;
      } else if (this.modifier > 0) {
        details += ` + ${this.modifier}`;
      }
      return details;
    },
    details() {
      let details = `${this.numDice}d${this.dieType}`;
      if (this.modifier < 0) {
        details += `${this.modifier}`;
      } else if (this.modifier > 0) {
        details += `+${this.modifier}`;
      }
      return details;
    },
  },
  methods: {
    reset() {
      this.rolls = [];
    },
    rollDice() {
      if (this.numDice <= 0) {
        throw new RangeError("The number of dice cannot be <= 0");
      }
      if (this.dieType <= 0) {
        throw new RangeError("The die type cannot be <= 0");
      }
      this.rolls = [];
      for (let i = 0; i < this.numDice; ++i) {
        const roll = Math.floor(Math.random() * this.dieType) + 1;
        this.rolls.push(roll);
      }
    },
  },
};
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
>>>>>>> db272264b0b8e414156864b691add81d67611c54
