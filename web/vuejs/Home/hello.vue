<script>
export default {
    data:  function() { return {
        greeting: 'Hello there,'
    }},
    computed: {
        alertClass: function() {
            return `alert alert-${this.type || 'primary'}`
        }
    },
    props: [
        'customGreeting',
        'type'
    ]
};
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>

<template lang="pug">
    div(:class="alertClass")
        | {{ customGreeting || greeting }} World!
</template>
