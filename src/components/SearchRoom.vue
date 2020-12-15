<template>
    <div id="SearchRoom">
        <form v-on:submit.prevent="submitForm">
            <div class="form-group">
                <label for="ciudad">city</label>
                <input type="text" class="form-control" id="ciudad" placeholder="Your name" v-model="form.city">
            </div>
            <div class="form-group">
                <label for="isDeluxe">Deluxe</label>
                <input type="checkbox" class="form-control" id="isDeluxe" v-model="form.isDeluxe">
            </div>
            <div class="form-group">
                <label for="maxPrice">MaxPrice</label>
                <input type="text" class="form-control" id="maxPrice" placeholder="" v-model="form.maxPrice">
            </div>              
            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchRoom',
    data(){
        return{
            form: {
                city: '',
                isDeluxe: '',
                maxPrice: ''
            }
        }
    },
    methods:{
        submitForm(){
            console.log(this.form)
            axios.post('https://reservahotelesminticjg.herokuapp.com/search/', this.form)
                 .then((res) => {
                     console.log(res.data)//Perform Success Action
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    }
}
</script>

<style>
    #SearchRoom{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #SearchRoom h2{
        font-size: 50px;
        color: #283747;
    }
    #SearchRoom span{
        color: crimson;
        font-weight: bold;
    }
</style>