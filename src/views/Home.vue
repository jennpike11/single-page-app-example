<template>
  <div class="container">
    <div class="intro">
        <h1 class="intro__title">RWE for Regulatory Use Decision Aid</h1>
        <div class="intro__text">The interactive Decision Aid aims to help identify potential areas of opportunity for RWE to support regulatory strategies and clinical development plans, by matching regulatory objectives of interest and corresponding RW study design types with real-life case examples.</div>
        <h3>What the tool will cover</h3>
        <div class="intro-boxes">
            <div class="intro-box">
              <div class="intro-box__icon">1</div>
              <div class="intro-box__text">Regulatory objective</div>
            </div>
            <div class="intro-box">
              <div class="intro-box__icon">2</div>
              <div class="intro-box__text">RWE Study Design Type</div>
            </div>
            <div class="intro-box">
              <div class="intro-box__icon">3</div>
              <div class="intro-box__text">Applicable Preceedents</div>
            </div>
        </div>
    </div>   

    <div class="main-content--wrapper">
      <div class="animated-background-box">
        <div class="animated-background-box__text">Do you have a situation where you may be considering RWE? If yes, click below to enter the tool.</div>
          <div class="primary-button" v-for="destination in destinations" :key="destination.slug">
             <router-link
                :to="{
                  name: 'Destination',
                  params: { slug: destination.slug }
                }"
              >
          Start now
        </router-link>
          </div>
          <div class="blobs">
            <div class="blob-one"></div>
            <div class="blob-two"></div>
          </div>  
      </div>  
    </div> 
    
    <div class="main-image">
       <img :src="require('@/assets/illustration.png')">
    </div> 
  </div> 
</template>  

<script>
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

