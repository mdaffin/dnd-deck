<template>
    <Layout>
    <DiceRoller />
    </Layout>
</template>

<script>
import DiceRoller from '~/components/DiceRoller.vue'
export default {
    metaInfo: {
        title: 'Dice Roller'
    },
    components: {
        DiceRoller
    }
}
</script>