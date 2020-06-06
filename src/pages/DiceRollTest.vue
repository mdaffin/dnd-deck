<template>
    <Layout>
        <div class="card">
        <div class="form-group">
            <label for="num_dice">Number of Dice</label>
            <input class="form-input" type="number" id="num_dice" name="num_dice" min="1" v-model.number="rollData.numDice" value="1">
        </div>
        <div class="form-group">
            <label for="die_select">Die</label>
            <select class="form-input" name="die_select" id="die_select" v-model.number="rollData.dieType">
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
            <input class="form-input" type="number" id="modifier" name="modifier" value="0" v-model.number="rollData.mod">
        </div>
        <div class="form-group">
            <Dice :numDice="rollData.numDice" :dieType="rollData.dieType" :modifier="rollData.mod" />
        </div>
    </div>
    </Layout>
</template>

<script>
import Dice from '@/components/Dice.vue'
export default {
    metaInfo: {
        title: 'Dice Roller'
    },
    components: {
        Dice
    },
    data () {
        return {
            rollData: {
                numDice: 0,
                dieType: 0,
                mod: 0
            }
        }
    }
}
</script>

<style>
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