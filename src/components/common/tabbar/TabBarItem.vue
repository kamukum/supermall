<template>   
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActivate"><slot name="item-icon"></slot></div>
        <div v-else> <slot name="item-icon-active"></slot></div>      
        <!-- <div :class="{active:isActivate}"><slot name="item-text"></slot></div>        -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>       
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
        <div>首页</div> -->
    </div>

</template>

<script>
export default {
  data() {
    return {
      // isActivate:true
    }
  },
  computed:{
    isActivate(){
      return this.$route.path.indexOf(this.path) !== -1
    },
     activeStyle(){
    return this.isActivate ? {color:this.activeColor}:{}
  }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err => {})
    }
  },

 
}
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  height:24px ;
  width: 24px;
  margin-top:3px;
  vertical-align: middle;
}

/* .active{
  color:red
} */
</style>