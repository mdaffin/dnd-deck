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
    count: {
      type: Number,
      default: 1,
    },
    sides: {
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
      let details = `${this.count}d${this.sides}`;
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
      if (this.count <= 0) {
        throw new RangeError("The number of dice cannot be <= 0");
      }
      if (this.sides <= 0) {
        throw new RangeError("The die type cannot be <= 0");
      }
      this.rolls = [];
      for (let i = 0; i < this.count; ++i) {
        const roll = Math.floor(Math.random() * this.sides) + 1;
        this.rolls.push(roll);
      }
    },
  },
};
</script>

<style scoped>
button {
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  width: 100%;
}
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
