<script setup>
  import Footer from "./footer.vue"
  import plate from  "../../plate.png"
  import axios from "axios"
  import { ref } from "vue"
  const name = ref("")
  const email = ref("")
  const message = ref("")
  const handleSubmit = (e) => {
    e.preventDefault()
  axios.post("https://ecommerce-server-y5yv.onrender.com/contact", {
      name: name.value,
      email: email.value,
      message: message.value
    })
    name.value = ""
    email.value = ""
    message.value = ""
  }
</script>
<template>
  <div class="contact" >
    <div class="top" >
      <h1>CONTACT US</h1>
      <br/>
      <p>This page is work for contact to know something abou us.</p>
      <p>We provide a lot of service like cardio, gym, sport training and other.</p>
      <br/><br/>
       <img :src="plate" alt="gym" />
    </div>
    <div className="contactForm">
      <v-container>
       <v-row>
       <v-col cols="12" sm="6" md="6" lg="6">
        <h1>CONTACT FORM</h1>
        <p>Contact us for advertise or having interested in cooperate with us, so if you wanna support or cooperate, please contact us, hope you don't mind if we not response earlier!</p>
         
       </v-col>
       <v-col cols="12" sm="6" md="6" lg="6" >
        <form action="" method="post" @submit="handleSubmit">
          <label>Name</label>
          <div className="input-box1">
         <input type="text" placeholder="name" v-model="name" required/>
       </div>
       <label>Email</label>
       <div className="input-box1">
         <input type="email" placeholder="Email" v-model="email" required/>
       </div>
          <label>Message</label>
         <textarea placeholder="message" v-model="message"  required/>
         <button className="btn" >Submit</button>
        </form>
        </v-col>
       </v-row>
      </v-container>
      </div> 
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
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
  .contactForm {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-top: 70px;
  padding-bottom: 80px;
  font-family: Centra;
    animation: gym1 1.5s;
  }
  .contactForm h1 {
   color:#8F00FF;
  }
  .contact {
    animation: gym1 1.5s;
    font-family: Centra;
    width: 100%;
    background:  #211e1e;
    height: auto;
    padding-top: 140px;
    color: white;
    
  }
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Centra;
    text-align: center;
    padding-top: 20px;
    align-items: center;
    animation: gym1 1.5s;
  }
  .top h1 {
    font-size: 35px;
    animation: gym1 1.5s; color: #8F00FF;
  }
  .top p {
    font-size: 25px;
  }
  .top img {
   width: 320px;
    animation: gym1 1.5s;
  }
  .contactForm form{
    animation: gym1 1.5s;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Centra;
    
}
.contactForm .input-box1{
  position: relative;
  width: 100%;
  height: 50px;
  font-family: Centra;
  display: flex;
  color: white;
  animation: gym1 1.5s;
  border-radius: 5px;
  background: white;
  flex-direction: column;
}
.contactForm textarea{
  
  height: 150px;
  background: white;
  outline: none;
  color: black;
  border: 2px solid #8F00FF;
  border-radius: 5px;
  animation: gym1 1.5s;
}
.input-box1 input {
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: 2px solid #8F00FF;
  border-radius: 5px;
  font-family: Centra;
  animation: gym1 1.5s;
}
.input-box1 input::placeholder{
  color: black;
  padding-left: 10px;
}
  .btn{
  width: 100%;
  height: 45px;
    animation: gym1 1.5s;
  background: #8F00FF;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, -1);
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: 700;
  margin-top: 30px;
}

</style>