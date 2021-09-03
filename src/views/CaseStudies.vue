<template>  
    <div class="container case-studies"> 
        <div class="case-studies--wrapper">
            <div class="case-studies-intro">
                <h1 class="case-studies-intro__heading">External benchmark using EHR data to support new destination approval in metastatic Merkel cell carcinoma</h1>
                <div class="case-studies-intro__buttons">
                    <div class="primary-button">Download case study</div>
                    <goBack />
                </div>
            </div>
            <div class="case-studies">
                <div class="case-studies__left">
                    <h2>Axicabtagene ciloleucel
                        <span>Relapsed or refractory large B-cell lymphoma</span>
                    </h2>
                    <div class="drug-table">
                        <div class="drug-table__row">
                            <div class="drug-table__item">Drug name</div><div class="drug-table__item">Axicabtagene ciloleucel</div>
                        </div>
                        <hr>
                        <div class="drug-table__row">
                            <div class="drug-table__item">Regulatory objective</div><div class="drug-table__item">New destination approval</div>
                        </div> 
                        <hr>
                        <div class="drug-table__row">
                            <div class="drug-table__item">Study type</div><div class="drug-table__item">External control - Real-world benchmark</div>
                        </div> 
                        <hr>
                        <div class="drug-table__row">
                            <div class="drug-table__item">RWD source</div><div class="drug-table__item">EHR chart extraction</div>
                        </div> 
                        <hr>
                        <div class="drug-table__row">
                            <div class="drug-table__item">Rare disease?</div><div class="drug-table__item">Yes</div>
                        </div> 
                        <hr>
                        <div class="drug-table__row">
                            <div class="drug-table__item">High urgency to treat?</div><div class="drug-table__item">Yes</div>
                        </div> 
                        <hr>
                        <div class="drug-table__case-overview">
                            <h5>Case overview</h5>
                            <p>SCHOLAR-1 is a retrospective global patient-level pooled study, which integrated data from 2 randomized Phase 3 studies and 2 observational databases of patients with refractory diffuse large B-cell lymphoma (DLBCL), primary mediastinal B-cell lymphoma (PMBCL), and transformed follicular lymphoma (TFL). SCHOLAR-1 was developed as a companion study to a single-arm trial (ZUMA-1) to provide context for interpreting the ZUMA-1 results.</p>
                        </div>
                    </div>    
                </div>
                <div class="case-studies__right">
                    <div class="case-studies__legend" v-on:click.prevent="extend()">
                        <div class="legend__heading">Symbol Legend<span class="legend__plus"><img :src="require('@/assets/actions_plus.png')"></span><span class="legend__minus"><img :src="require('@/assets/actions_minus.png')"></span></div>
                        <div class="legend__items">
                            <div class="legend__item"><span><img :src="require('@/assets/green_check.png')"></span>The key RWD success factor is satisfied</div>
                            <div class="legend__item"><span><img :src="require('@/assets/red_x.png')"></span>The key RWD success factor is not satisfied</div>
                            <div class="legend__item"><span><img :src="require('@/assets/yellow_question.png')"></span>Relevant information is not mentioned in the publicly available reports</div>
                            <div class="legend__item"><span><img :src="require('@/assets/blue_circle.png')"></span>Relevant information is mentioned in the publicly available reports but key RWD success factor was not fully resolved</div>
                        </div>
                    </div>
                    <div class="success-table">
                        <div class="success-table__row">
                            <div class="success-table__item">Success Factor</div><div class="success-table__item">Rationale</div>
                        </div>
                        <hr>
                        <div class="success-table__row">
                            <div class="background-green"><img :src="require('@/assets/green_check.png')"></div><div class="success-table__item">Clear endpoint</div><div class="success-table__item">The primary endpoint in SCHOLAR-1 was response rate (per International Working Group Response Criteria for the 2 randomized studies and per investigator assessment for the 2 retrospective databases). Secondary endpoints were complete response rate and overall survival.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-green"><img :src="require('@/assets/green_check.png')"></div><div class="success-table__item">Minimized biases</div><div class="success-table__item">The primary endpoint in SCHOLAR-1 was response rate (per International Working Group Response Criteria for the 2 randomized studies and per investigator assessment for the 2 retrospective databases). Secondary endpoints were complete response rate and overall survival.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-yellow"><img :src="require('@/assets/yellow_question.png')"></div><div class="success-table__item">Complete</div><div class="success-table__item">Rules for data abstraction were pre-defined and the subset of subjects who could be documented to meet all elements of the refractory definition used was programmatically identified. Assessment of completeness of data is unclear.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-green"><img :src="require('@/assets/green_check.png')"></div><div class="success-table__item">Transparent</div><div class="success-table__item">SCHOLAR-1 objectives and patient inclusion criteria were provided and endpoints were clearly defined. Details on standardized analyses were also provided.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-green"><img :src="require('@/assets/green_check.png')"></div><div class="success-table__item">Generalizable</div><div class="success-table__item">Rules for data abstraction were pre-defined and the subset of subjects who could be documented to meet all elements of the refractory definition used was programmatically identified. Assessment of completeness of data is unclear.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-yellow"><img :src="require('@/assets/yellow_question.png')"></div><div class="success-table__item">Timely</div><div class="success-table__item">Unclear. Patients with a date of diagnosis prior to2000 were included but database lock date wasnot provided.</div>
                        </div> 
                        <hr>
                        <div class="success-table__row">
                            <div class="background-pink"><img :src="require('@/assets/red_x.png')"></div><div class="success-table__item">Scalable</div><div class="success-table__item">The study required discrete use of RWD that was not intended to be scaled to multiple context.</div>
                        </div> 
                    </div>    
                </div>
                <div class="blob-left"></div>
                <div class="blob-right"></div>
            </div>    
        </div>  
    </div>
</template>    

<script>
import items from "@/items.js";
import GoBack from "@/components/GoBack.vue";

export default {
    name: "CaseStudies",
    
    components: {
        GoBack
    },
    methods: {
  
    extend: function extend() {
            var extendBox = document.querySelector('.case-studies__legend');
            if (extendBox.classList.contains('active')){
                extendBox.classList.remove('active');
            } else {
                extendBox.classList.add('active');
            }
        } 
    },
      data() {
        return {
        destinations: store.destinations
        };
  },  
};

</script>