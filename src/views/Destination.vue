<template>
  <div class="container destination">
    <div class="navigation">
       <GoBack />
      <div class="breadcrumbs">
        <div class="breadcrumb breadcrumb-1"><span>1.</span><span>REGULATORY OBJECTIVE</span></div>
        <div class="breadcrumb breadcrumb-2"><span>2.</span><span>RWE STUDY DESIGN TYPE</span></div>
        <div class="breadcrumb breadcrumb-3"><span>3.</span><span>APPLICABLE PRECEDENTS</span></div>
        <div class="breadcrumb breadcrumb-4"><span>4.</span><span>INDIVIDUAL CASE STUDY</span></div>
      </div>
    </div>   
   
    <div class="main-content--wrapper">
        <div class="main-content">    
            <div class="main-content__inner clamped">
                <h2 class="main-content__title">{{destination.title}}</h2>
                <div class="main-content__teaser">
                    <p>{{destination.teaser}}</p>
                    <ul>
                        <li v-for="(listItem, index) in destination.listItems" :key="index" v-html="listItem" v-on:click="animate($event)"></li>
                    </ul>
                </div>    
                <span class="more-button" v-on:click="readMore($event)">Read less</span>
            </div>
            <h3>{{destination.optionCardIntro}}</h3>
        </div> 

        <div class="animated-background-box">
          <div class="option-cards--wrapper">
            <div class="option-cards">
              <div class="option-card" v-for="optionCard in destination.optionCards" :key="optionCard.option">
                  <router-link
                    :to="{
                      name: 'OptionCard',
                      params: { slug: optionCard.slug }
                    }"
                    >
                    <div class="option-card__number">{{ optionCard.option }}</div>
                    <div class="option-card__title">{{ optionCard.title }}</div>
                    <div class="option-card__icon"><img :src="require(`@/assets/${optionCard.image}`)"></div>
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
        </div>  
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
  data() {
    return {};
  },
  components: {
      GoBack
  },
  props: {
    slug: {
      type: String
    },
    optionCardSlug: {
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
        optionCard => optionCard.slug === this.optionCardSlug
      );
    },
    tierTwo() {
      return this.optionCard.tierTwo.find(
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
    animate: function animate() {
          var blobs = document.querySelector('.blobs');
          if (blobs.classList.contains('active')){
              blobs.classList.remove('active');
          } else {
              blobs.classList.add('active');
          }
      }, 
    }, 
};
</script>

