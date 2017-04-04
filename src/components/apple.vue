<template>
    <div>
        <a href="">i am an apple</a>
        <button @click="add">add</button>
        <button @click="minus">minus</button>
    </div>
</template>

<script>
    export default {
        name: 'apple',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                price:10
            }
        },
        props: {
            id: {
                type: String,
            }
        },
        methods: {
            add(){
                this.$store.dispatch('increase',this.price);
            },
            minus(){
                this.$store.commit('decrement',this.price);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
