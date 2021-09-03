<template>
  <div class="container option-card">
    <div class="navigation">
       <GoBack />
      <div class="breadcrumbs">
        <div class="breadcrumb"><span>1.</span>REGULATORY OBJECTIVE</div>
        <div class="breadcrumb"><span>2.</span>RWE STUDY DESIGN TYPE</div>
        <div class="breadcrumb"><span>3.</span>APPLICABLE PRECEDENTS</div>
        <div class="breadcrumb"><span>4.</span>INDIVIDUAL CASE STUDY</div>
      </div>
    </div>   
   
   
    <div class="main-content--wrapper"
      v-for="optionCard in optionCards" :key="optionCard.slug">
        <div class="main-content">    
            <div class="main-content__inner clamped">
                <h2 class="main-content__title">
                  {{optionCard.title}}</h2>
                <div class="main-content__teaser">
                    <p>{{optionCard.teaser}}</p>
                    <ul>
                        <li v-for="(listItem, index) in optionCard.listItems" :key="index" v-html="listItem"></li>
                    </ul>
                </div>    
                <span class="more-button" v-on:click="readMore($event)">Read less</span>
            </div>
            <h3>{{optionCardIntro}}</h3>
        </div> 

        <!-- <div class="animated-background-box">
          <div class="option-cards--wrapper">
            <div class="option-cards">
              <div class="option-card" v-for="tierTwo in optionCard.tierTwo" :key="tierTwo.slug">
                  <router-link
                    :to="{
                      name: 'TierTwo',
                      params: { tierTwoSlug: tierTwo.slug }
                    }"
                    >
                   
                    <div class="option-card__title">{{ tierTwo.title }}</div>
                    
                    <div class="option-card__arrow"><img :src="require('@/assets/purple_arrow.png')"></div>
                  </router-link>

                  <router-view :key="$route.path" />
              </div>
            </div>  
          </div>

          <div class="blobs">
            <div class="blob-one"></div>
            <div class="blob-two"></div>
          </div>  
        </div>   -->

    </div> 
    
    <div class="main-image">
       <img :src="require('@/assets/illustration.png')">
    </div>  
   
  </div>  
</template>




<script>
import store from "@/store";
import GoBack from "@/components/GoBack"

export default {
   name: "OptionCard",
  data(){
      return{
        optionCards: store.destinations.optionCardSlug
    }
  },
  components: {
      GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    optionCardSlug: {
      type: String,
      required: true
    },
    tierTwoSlug: { 
      type: String
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
     optionCard() {
      return this.destination.optionCards.find(
        optionCard => optionCard.slug === this.optionCard
      );
    },
    tierTwo() {
      return this.destination.optionCard.tierTwo.find(
        tierTwo => tierTwo.slug === this.tierTwoSlug
      );
    }
  },
   methods: {
    readMore: function readMore() {
            var clamped = document.querySelector('.main-content__inner');
            if (clamped.classList.contains('clamped')){
                clamped.classList.remove('clamped');
            } else {
                clamped.classList.add('clamped');
            }
        },
   }
};
</script>

