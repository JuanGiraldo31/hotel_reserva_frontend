<template>
    <div id="Comida">
        <h2>Desayunos</h2>
        <p>1){{desayuno1[0]}}, Precio: {{desayuno1[1]}}<span>COP.</span> Disponible: {{desayuno1[2]}}<br/>
        1){{desayuno2[0]}}, Precio: {{desayuno2[1]}}<span>COP.</span> Disponible: {{desayuno2[2]}}</p><br/>

        <h2>Almuerzos</h2>
        <p>1){{almuerzo1[0]}}, Precio: {{almuerzo1[1]}}<span>COP.</span> Disponible: {{almuerzo1[2]}}<br/>
        2){{almuerzo2[0]}}, Precio: {{almuerzo2[1]}}<span>COP.</span> Disponible: {{almuerzo2[2]}}</p><br/>

        <h2>Cenas</h2>
        <p>1){{cena1[0]}}, Precio: {{cena1[1]}}<span>COP.</span> Disponible: {{cena1[2]}}<br/>
        2){{p1}}, Precio: {{p2}}<span>COP.</span> Disponible: {{p3}}</p><br/>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Comida',
        data: function (){
            return {
                desayuno1: [],
                desayuno2: [],
                almuerzo1: [],
                almuerzo2: [],
                cena1: [],
                cena2: [],
                p1: "",
                p2: "",
                p3: ""
            }
        },
        created: function(){
            let self = this
            axios.get("https://reservahotelesminticjg.herokuapp.com/food")
                .then((result) => {
                    //Desayunos
                    self.desayuno1[0] = result.data[0]["Tipo"]
                    self.desayuno1[1] = result.data[0]["PriceCOP"]
                    self.desayuno1[2] = result.data[0]["isAvailable"]
                    if (self.desayuno1[2]){
                        self.desayuno1[2] = "Si"
                    }else{
                        self.desayuno1[2] = "No"
                    }
                    
                    self.desayuno2[0] = result.data[1]["Tipo"]
                    self.desayuno2[1] = result.data[1]["PriceCOP"]
                    self.desayuno2[2] = result.data[1]["isAvailable"]
                    if (self.desayuno2[2]){
                        self.desayuno2[2] = "Si"
                    }else{
                        self.desayuno2[2] = "No"
                    }

                    //Almuerzos
                    self.almuerzo1[0] = result.data[2]["Tipo"]
                    self.almuerzo1[1] = result.data[2]["PriceCOP"]
                    self.almuerzo1[2] = result.data[2]["isAvailable"]
                    if (self.almuerzo1[2] == 1){
                        self.almuerzo1[2] = "Si"
                    }else{
                        self.almuerzo1[2] = "No"
                    }
                    
                    self.almuerzo2[0] = result.data[3]["Tipo"]
                    self.almuerzo2[1] = result.data[3]["PriceCOP"]
                    self.almuerzo2[2] = result.data[3]["isAvailable"]
                    if (self.almuerzo2[2]){
                        self.almuerzo2[2] = "Si"
                    }else{
                        self.almuerzo2[2] = "No"
                    }

                    //Cenas
                    self.cena1[0] = result.data[4]["Tipo"]
                    self.cena1[1] = result.data[4]["PriceCOP"]
                    self.cena1[2] = result.data[4]["isAvailable"]
                    if (self.cena1[2] == 1){
                        self.cena1[2] = "Si"
                    }else{
                        self.cena1[2] = "No"
                    }
                    //Intent usar la lista "cena2" pero por alguna razon la pagina no cargaba
                    self.p1 = result.data[5]["Tipo"]
                    self.p2 = result.data[5]["PriceCOP"]
                    self.p3 = result.data[5]["isAvailable"]
                    if (self.p3){
                        self.p3 = "Si"
                    }else{
                        self.p3 = "No"
                    }

                })
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }
    }
</script>

<style>
    #Comida{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Comida h2{
        font-size: 40px;
        color: #283747;
    }
    #Comida span{
        color: crimson;
        font-weight: bold;
    }
    #Comida p{
        font-size: 20px;
        font-weight: bold;
    }
</style>