<script setup>
  import plate from "../../plate.png"
  import heart from "../../heartF.png"
  import run from "../../run.png"
  import fire from "../../fire.png"
</script>
<template>
  <div class="program">
    <span class="homeName">WELLCOME TO</span>
            <span class="homeName">
             OUR <b class="bold">PROGRAM</b>
            </span>
    <div class="program-cpntent">
      <v-container>
        <v-row class="pa-2">
          <v-col cols="12" sm="4" lg="4" >
            <div class="card" >
              <img :src="plate" alt="plate" />
              <h2>Strength Training</h2>
              <p>In this program, you are trained to improve your strength through many exercises.</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4" lg="4" >
            <div class="card" >
              <img :src="heart" alt="plate" />
              <h2>Health Fitness</h2>
              <p>
This programs is designed for those who exercises only for their body fitness not body building</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4" lg="4" >
            <div class="card" >
              <img :src="run" alt="plate" />
              <h2>Cardio Training</h2>
              <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4" lg="4" >
            <div class="card" >
              <img :src="fire" alt="plate" />
              <h2>Fat Burning</h2>
              <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
            </div>
          </v-col>
          
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style scoped>
  .card {
    display: flex;
    width: 100%;
    height: 350px;
    border: 2px solid #8F00FF;
    border-radius: 15px;
    flex-direction:column;
    background: #343434;
    padding: 30px;
    animation: gym1 1.5s;
  }
  .card:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  .card img {
    width: 105px;
    padding-bottom: 20px;
    margin: auto;
  }
  .program{
    display: flex;
    padding: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 60px;
    flex-direction: column;
    animation: gym1 1.5s;
  }
  .bold{
    font-size: 42px;
    color: #8F00FF;
    font-family: Centra;
  }
  .homeName {
   font-size: 42px;
   margin-left: 5px;
   font-weight: 500;
   font-family: Centra;
  }
  @keyframes gym1 {
    0%{
      opacity: 0;
      margin-top: 180px;
    }
    100%{
      opacity: 1;
      margin-top: 0;
    }
  }
</style>