<template>
    <div id="UserPoints">
        <h2>{{username}}</h2>
        <h2>Tienes <span> {{RewardPoints}} </span> puntos.  </h2>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'UserPoints',
        data: function (){
            return {
                username: "",
                RewardPoints: 0
            }
        },
        created: function(){
            this.username = this.$route.params.username
            let self = this
            axios.get("https://reserva-hoteles-g1m3-18.herokuapp.com/user/RewardPoints/" + this.username)
                .then((result) => {
                    self.RewardPoints = result.data.RewardPoints
                })
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }
    }
</script>

<style>
    #UserPoints{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserPoints h2{
        font-size: 50px;
        color: #283747;
    }
    #UserPoints span{
        color: crimson;
        font-weight: bold;
    }
</style>