<template>
  <div id="app">
    <div class="header">
      <h1>Reservas Hotel</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth" > Inicio </button>
        <button v-on:click="getPoints" v-if="is_auth" > Puntos </button>
        <button v-on:click="buscarHabitacion" > Buscar </button>
        <button v-on:click="mostrarComidas" >Comidas</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022 - G1M3_16</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{username:username}})
      }
    },
    getPoints: function(){
      if(this.$route.name != "user_points"){
        let username = localStorage.getItem("current_username")
        this.$router.push({ name:"user_points",
                            params:{username:username}
                        })
      }
    },
    buscarHabitacion: function(){
      if(this.$route.name != "search_room"){
        this.$router.push({ name:"search_room"})
      }
    },
    mostrarComidas: function(){
      if(this.$route.name != "food_type"){
        this.$router.push({ name:"food_type"
                        })
      }
    }
  },
  beforeCreate: function(){
    localStorage.setItem('current_username', 'camilo24')
    localStorage.setItem('isAuth', true)

    this.$router.push({name:"user",params:{username:'camilo24'}})
  }
}
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
