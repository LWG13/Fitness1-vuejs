<script setup>
  import check from "../../check.png"
  import gym1 from "../../gym1.jpg"
  import gym2 from "../../gym2.jpeg"
  import gym3 from "../../gym3.jpg"
</script>
<template>
  <div class="reason">
    <v-container>
      <v-row class="pa-3">
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6" >
          <div class="reason-left">
            <img :src="gym1" alt="gym1" class="gym1"/>
            <div class="left" >
            <img :src="gym2" alt="gym1" class="gym2" />
            <img :src="gym3" alt="gym1" class="gym3" />
            </div>  
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6" >
          <div class="reason-right">
             <span class="homeName"><b class="bold">REASON</b> WHY</span>
            <span class="homeName">
             CHOOSE US
            </span>
            
            <div class="reasoning">
              <div class="reasoning-detail">
                <img :src="check" alt="check" />
                <span>OVER 140+ EXPERT COACHES</span>
              </div>
              <div class="reasoning-detail">
                <img :src="check" alt="check" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
              </div>
              <div class="reasoning-detail">
                <img :src="check" alt="check" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
              </div>
              <div class="reasoning-detail">
                <img :src="check" alt="check" />
                <span>RELIABLE PARTNERS FOR YOU</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
  @font-face {
  font-family: Centra;
  src: url("../centra.ttf");
  font-weight: 700;
}
@font-face {
  font-family: Centra;
  src: url("../centraMedium.ttf");
  font-weight: 500;
}
@font-face {
  font-family: Centra;
  src: url("../centraBook.ttf");
  font-weight: 400;
}
  .reason {
    width: 100%;
    display: flex;
    padding: 10px;
    color: white;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin-top: 60px;
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
  .reason-left {
    display: flex;
    padding-bottom: 50px;
    animation: gym1 1.5s;
  }
  .reason-left .gym1 {
    width: 150px;
    height: 370px;
    animation: gym1 1s;
  }
  .reason-left .left {
    display: flex;
    flex-direction: column;

    padding-left: 20px;
    animation: gym1 0.8s;
  }  
  .reason-left .left .gym2 {
    width: 100%;
    height: 185px;
    margin-bottom: 20px;
    border: 1px solid white;
  }

  .reason-left .left .gym3 {
    border: 1px solid white;
    width: 100%;
    height: 165px;
  }
  .reason-left .left .gym1:hover {
    transform: scale(1.05);
  }
  .reason-left .left .gym2:hover {
    transform: scale(1.05);
  }
  .reason-left .left .gym3:hover {
    transform: scale(1.05);
  }
  .reason-right{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    animation: gym1 1.5s;
  }
  .reason-right reasoning {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .reason-right .reasoning .reasoning-detail {
    display: flex;
    padding: 5px;
    margin-top: 25px;
    animation: gym1 1s;
  }
  .reason-right .reasoning .reasoning-detail img {
    width: 90px;
    height: 90px;
    padding: 20px;
  }
  .reason-right .reasoning .reasoning-detail span {
    font-family: Centra;
    margin-top: 17px;
    font-size: 19px;
    font-weight: 600;
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