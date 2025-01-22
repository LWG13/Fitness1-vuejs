<script setup>
  import { ref } from "vue"
  import left from "../../left.png"
  import right from "../../right.png"
  const select = ref(0)
  console.log(select.value)
  const review = [{
    name: "Marker Metinal",
    job: "Coach",
    review: "I have been using this gym for a long time and I have to say that it is the best gym I have ever been to.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },{
    name: "Giloal Perker",
    job: "Entrepreneur",
    review: "My life was changed when i go to this gym, after working out 2 years, now im feel very confident to myself!.",
    image:"https://i.pinimg.com/736x/00/49/bf/0049bf07f235946231927cfccf349826.jpg"
  },{
    name: "Jashmid Croker",
    job: "Mechanician",
    review: "I alway want to change myself, but this gym is the best way to do it.",
    image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
  }]
  const handleUp = () => {
    if(select.value !== 2) {
      select.value = select.value + 1
    }
    else if(select.value === 2) {
      select.value = 0
    }
  }
  const handleDown = () => {
    if(select.value !== 0) {
      select.value = select.value - 1
    }
    else if(select.value === 0) {
      select.value = 2
    }
  }
</script>
<template>
  <div class="about" >
    <br/>
    <h1>TESTIMONIALS</h1>
    <br/>
    <span class="homeName">WHAT THEY SAY</span>
     <span class="bold">ABOUT US</span>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <div class="review" >
            <h1>{{review[select].name}}</h1>
            <span class="job">{{review[select].job}}</span>
            <p>{{review[select].review}}</p>
            
          </div>
          <img :src="left" @click="handleDown" class="btn1" />
          <img :src="right" @click="handleUp" class="btn" />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <div class="review-image" >
            <img :src="review[select].image" alt="reviewer" height="480px" loading="lazy"/>
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
  .about {
    width: 100%;
    font-family: Centra;
    color: white;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 140px;
    padding-bottom: 120px;
    animation: gym1 1.5s;
  }
  .review {
    width: 100%;
    padding: 10px;
    animation: gym1 1s;
  }
  .review .h1{
    font-size: 34px;
  }
  .review p {
    font-size: 28px;
  }
  .review .job {
    border-bottom:  3px solid #8F00FF;
    font-size: 24px;
  }
  
  .bold{
    font-size: 42px;
    color: #8F00FF;
    font-family: Centra;
  }
  .review-image{
    width: 100%;
    padding: 20px;
    animation: gym1 1s;
  }
  .review-image img {
    width: 100%;
    height: 480px;
    border-radius: 8px;
    border: 2px solid #8F00FF;
  }
  .review-image img:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
  .homeName {
   font-size: 42px;
   margin-left: 5px;
   font-weight: 500;
   font-family: Centra;
  }
  .btn{
    width: 78px;
  }
  .btn1{
    width: 60px;
  }
</style>