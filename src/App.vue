<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Переключение Tabs</h1>
  <hr>
  <app-async></app-async>

  <app-button
      :color="oneColor"
      @btnclick="activeBtn = 'onenews' "
  >
    One
  </app-button>

  <app-button
      :color="activeBtn === 'twonews' ? 'active': '' "
      @btnclick="activeBtn = 'twonews' "

  >
    Two
  </app-button>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>


</template>

<script>
import AppNewsOne from "@/components/AppNewsOne";
import AppNewsTwo from "@/components/AppNewsTwo";
import AppButton from "@/components/AppButton";
import AppAsync from "@/components/AppAsync";

export default {
  name: 'App',
  data() {
    return {
      activeBtn: 'onenews'
    }
  },

  computed: {
    componentName() {
      if (this.activeBtn === 'onenews') {
        return 'app-news-one'
      } else {
        return 'app-news-two'
      }
    },

    oneColor() {
      return this.activeBtn === 'onenews' ? 'active': ''
    }
  },
  components: {
    AppAsync,
    AppNewsOne,
    AppNewsTwo,
    AppButton,
  }

}
</script>

<style scoped>

button {
  margin-bottom: 30px;
  margin-left: 20px;
}

</style>
