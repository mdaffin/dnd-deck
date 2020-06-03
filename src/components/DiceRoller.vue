<template>
    <div class="card">
        <div class="form-group">
            <label for="num_dice">Number of Dice</label>
            <input class="form-input" type="number" id="num_dice" name="num_dice" min="1" value="1">
        </div>
        <div class="form-group">
            <label for="die_select">Die</label>
            <select class="form-input" name="die_select" id="die_select">
                <option value="2">D2</option>
                <option value="3">D3</option>
                <option value="4">D4</option>
                <option value="6">D6</option>
                <option value="8">D8</option>
                <option value="10">D10</option>
                <option value="12">D12</option>
                <option value="20" selected>D20</option>
                <option value="100">D100</option>
            </select>
        </div>
        <div class="form-group">
            <label for="modifier">Modifier</label>
            <input class="form-input" type="number" id="modifier" name="modifier" value="0">
        </div>
        <div class="form-group">
            <button type="button" @click="RollDice">Roll Dice</button>
        </div>
        <div id="result-div">
            <h3>Total: <span v-html="results"></span></h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiceRoller',
    data () {
        return {
            results: 0
        }
    },
    methods: {
        RollDice() {
            let result = 0
            for (let i=0; i < Number(num_dice.value); i++) {
                result += Math.floor(Math.random()*Number(die_select.value)) + 1
            }
            result += Number(modifier.value)
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