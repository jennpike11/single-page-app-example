<template>

  <div class="container tier-two">
    <div class="navigation">
       <GoBack />
      <div class="breadcrumbs">
        <div class="breadcrumb"><span>1.</span>REGULATORY OBJECTIVE</div>
        <div class="breadcrumb"><span>2.</span>RWE STUDY DESIGN TYPE</div>
        <div class="breadcrumb"><span>3.</span>APPLICABLE PRECEDENTS</div>
        <div class="breadcrumb"><span>4.</span>INDIVIDUAL CASE STUDY</div>
      </div>
    </div>   
   
    
    <div v-on:click="openCaseStudy()">hi</div>
    
    
</div>
</template>

<script>
import store from '@/store.js';

export default {
    data(){
        return {}
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination(){
            return store.destinations.find(
                destination => destination.slug === this.slug
            )
        }
    },
    openCaseStudy: function openCaseStudy() {
        var container = document.querySelector('.container');
        container.classList.add('case-studies-open');
                     
        },
}
</script>

