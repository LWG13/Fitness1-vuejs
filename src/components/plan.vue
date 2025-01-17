<script setup>
  import crown from "../../crown.png"
  import heart from "../../heartF.png"
  import plate from "../../plate.png"
  import checked from "../../checked.png"
</script>
<template>
  <div class="plan" >
    <br/><br/>
     <span class="homeName">READY TO START</span>
     <span class="bold">YOUR JOURNEY</span>
      <br/><br/><br/>
       <v-container>
         <v-row >
           <v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4" >
             <div class="plan-item" >
               <img :src="heart" alt="heart" />
               <br/><br/>
               <h1>Basic Plan</h1>
               <br/>
               <h2 class="price">25$</h2>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>3 hours excercise</span>
               </li>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Free consultaion to coaches</span>
               </li>
                 <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Access to The Community</span>
               </li>
              </div>
           </v-col>
           <v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4" >
            <div class="plan-item-pre" >
               <img :src="crown" alt="heart" />
               <br/><br/>
               <h1>Premium Plan</h1>
               <br/>
               <h2 class="price">55$</h2>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>5 hours excercise</span>
               </li>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Free consultaion of Coaches</span>
               </li>
                 <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Accessto minibar</span>
               </li>
              </div>
            </v-col>
           <v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4" >
             <div class="plan-item" >
               <img :src="plate" alt="heart" />
               <br/><br/>
               <h1>Pro Plan</h1>
               <br/>
               <h2 class="price">75$</h2>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>8 hours of excercises</span>
               </li>
               <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Consultation of Private Coach</span>
               </li>
                 <li class="benefit">
                 <img :src="checked" alt="checked" />
                 <span>Free Fitness Merchandises</span>
               </li>
              </div>
           </v-col>
         </v-row>
       </v-container>
  
  </div>
</template>
<style scoped>
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
  .plan-item {
   width: 100%;
   height: 800px;
   background: #343434;
   color: white;
   padding: 30px;
   font-family: Centra;
   display: flex;
   flex-direction: column;
   align-items: center;
    
  } 
  .plan-item:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  .plan-item img {
    width: 90px;
  }
  .plan-item .price {
    font-size: 60px;
  }
  .plan-item-pre {
   width: 100%;
   height: 800px;
   background:  #8F00FF;
   color: white;
   padding: 30px;
   font-family: Centra;
   display: flex;
   flex-direction: column;
   align-items: center;
   
  } 
  .plan-item-pre:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
  .plan-item-pre img {
    width: 90px;
  }
  .plan-item-pre .price {
    font-size: 60px;
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
  .plan {
    display: flex;
    padding-top: 25px;
    flex-direction: column;
    color: white;
    text-align: center;
    padding: 10px;
    animation: gym1 1.5s;
    align-items: center;
  }
  .benefit {
    display: flex;
    margin-top: 50px;
    width: 100%;
  }
  .benefit img {
    width: 70px;
    height: 70px;
    margin-right: 40px;
  }
  .benefit span {
    font-size: 22px;
    font-weight: 500;
  }
</style>