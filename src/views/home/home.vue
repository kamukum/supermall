<template>
  <div id="home">
    <nav-bar class="home-div">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>


  <ul>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
    <li>adfd</li>
  </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/homeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/comtent/tabControl/TabControl'

import {getHomeMultidata} from 'network/home'





export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,

  },
  data() {
    return {
      // result:null
      banners:[],
      recommends:[]
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      // this.result = res;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list
    });
  },
}
</script>

<style>
  .home-div {
    background-color: var(--color-tint);
    color: var(--color-background);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>