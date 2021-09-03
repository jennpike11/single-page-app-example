import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },

    {
      path: "/destination-:slug",
      name: "Destination",
      props: true,
      component: () =>
        import(/* webpackChunkName: "Destination"*/ "@/views/Destination"),
    },
    {
      path: "/destination/option-:slug",
      name: "OptionCard",
      props: true,
      component: () =>
      import(/* WebpackChunkname: "OptionCard" */ "@/views/OptionCard.vue")
    },
    {
      path: "/destination/option/tier-:slug",
      name: "TierTwo",
      props: true,
      component: () =>
      import(/* WebpackChunkname: "TierTwo" */ "@/views/TierTwo.vue")
    },
  ]
});