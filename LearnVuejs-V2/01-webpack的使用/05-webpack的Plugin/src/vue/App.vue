<template>
    <div>
        <h2 class="tittle">{{message}}</h2>
        <button @click = "btnClick">按钮</button>
        <h2>{{name}}</h2>
        <cpn></cpn>
    </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
    name:'App',
    data(){
        return{
            message:'Hello webpack',
            name:'coderwhy'
        }
    },
    methods:{
        btnClick(){

        }
    },
    components:{
        Cpn
    }
}
</script>

<style scoped>
    .tittle{
        color: green;
    }
</style>