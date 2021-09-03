<template>
    <span class="secondary-button back-button" @click="goBack">Go back</span>
</template>

<script>


export default {
    methods: {
        goBack(){
            return this.$router.go(-1)
        }
    }
};
</script>
