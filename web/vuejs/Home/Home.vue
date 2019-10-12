<script>
    import hello from './hello.vue';

    export default {
        data:  () => { return {
            greeting1: 'Hello people of the',
            greeting2: 'Hello buddy to the',
            greeting3: 'Superman is leaving the',
        }},
        components: {
            hello
        }
    }
</script>

<style scoped>
p {
    font-size: 1em;
    text-align: center;
}
</style>

<template lang="pug">
    div
        hello(:custom-greeting="greeting1", type="danger")
        hello(:custom-greeting="greeting2", type="secondary")
        hello(:custom-greeting="greeting3", type="success")
        hello(type="warning")
</template>

