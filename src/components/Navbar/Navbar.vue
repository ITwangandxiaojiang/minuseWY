<template>
  <div class="top-nav">
    <div class="top">
      <div class="logo"></div>
      <div class="routere">
        <router-link to="/" :class="index === 1 ? 'active' : ''" @click="index = 1">发现音乐</router-link>
        <router-link to="/my" :class="index === 2 ? 'active' : ''" @click="index = 2">我的音乐</router-link>
        <router-link to="/friend" :class="index === 3 ? 'active' : ''" @click="index = 3">关注</router-link>
        <a target="_blank">商城</a>
        <a target="_blank">音乐人</a>
        <router-link to="/download" :class="index === 4 ? 'active' : ''" @click="index = 4">下载客户端</router-link>
      </div>
      <div class="tap-right">
        <div class="nav-right" @click="toggleEvent">
          <i></i>
          <input class="search" type="text" v-if="show" ref="input" v-model.trim="search"  @blur="show = false" @change="searchInfo">
          <span v-else>音乐/视频/电台/用户</span>
        </div>
        <a class="ahr-mid">创作者中心</a>
        <em @click="login">登录</em>
      </div>
    </div>
    <div class="sole" v-if="index === 1">
      <div>
        <router-link to="/mend" :class="index1 === 1 ? 'activec' : ''" @click="index1 = 1">推荐</router-link>
        <router-link to="/tchrai" :class="index1 === 2 ? 'activec' : ''" @click="index1 = 2">排行榜</router-link>
        <router-link to="/sonmen" :class="index1 === 3 ? 'activec' : ''" @click="index1 = 3">歌单</router-link>
        <router-link to="/thstat" :class="index1 === 4 ? 'activec' : ''" @click="index1 = 4">主播电台</router-link>
        <router-link to="/singer" :class="index1 === 5 ? 'activec' : ''" @click="index1 = 5">歌手</router-link>
        <router-link to="/tdslve" :class="index1 === 6 ? 'activec' : ''" @click="index1 = 6">新碟上架</router-link>
      </div>
    </div>
    <div class="solid" v-else></div>
    <PopBox v-if="comp" @update="toggle"></PopBox>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import PopBox from '../PopBox/PopBox.vue'
const show = ref(false);
var search = ref('');
const index = ref(1);
const index1 = ref(1);
const comp = ref(false);
const router = useRouter();
const input = ref<HTMLInputElement | null>(null);
const toggleEvent = () => {
  show.value = true;
  nextTick(()=>{
    input.value?.focus()
  })
}
const searchInfo = () =>{
  search.value = ''
}
const toggle = (bool:boolean) =>{
  comp.value = bool;
}
const login = () =>{
  comp.value = true
}
onMounted(() => {
  router.push({
    path: '/'
  })
})
</script>

<style lang="less" scoped>
.top-nav {
  width: 100%;

  .top {
    font-size: 12px;
    background-color: #242424;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      cursor: pointer;
      width: 176px;
      height: 69px;
      background: url(../../assets/Images/sprite/topbar.png) no-repeat;
    }

    .routere>a {
      display: inline-block;
      height: 70px;
      color: #ccc;
      text-align: center;
      line-height: 70px;
      padding: 0 19px;
      font-size: 14px;

      &:last-of-type {
        position: relative;
      }

      &:last-of-type::before {
        content: '';
        display: block;
        background: url(../../assets/Images/sprite/topbar.png) no-repeat;
        background-position: -191px 0px;
        width: 28px;
        height: 13px;
        position: absolute;
        top: 20px;
        right: -20px;
      }
    }

    .routere>a:hover {
      background-color: #000;
      color: #fff;
    }

    .tap-right {
      display: flex;
      margin-left: 90px;

      .nav-right {
        padding: 2px 10px 2px 0;
        width: 195px;
        height: 30px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-size: 12px;

        i {
          display: inline-block;
          height: 17px;
          width: 20px;
          background: url(../../assets/Images/sprite/topbar.png) no-repeat;
          background-position: -3px -106px;
          margin-right: 5px;
        }

        .search {
          border: none;
          outline: none;
          flex: 0.8;
          transform: scale(0.9);
        }

        span {
          color: #9b9b9b;
          cursor: text;
          flex: 1;
          transform: scale(0.9);
        }
      }

      .ahr-mid {
        margin-left: 10px;
        width: 90px;
        height: 32px;
        border-radius: 20px;
        border: 1px solid #4F4F4F;
        color: #ccc;
        text-align: center;
        line-height: 32px;
      }

      em {
        cursor: pointer;
        margin: 8px 0 0 10px;
        color: #787878;

        &:hover {
          color: #5a5a61;
          text-decoration: underline;
        }
      }
    }
  }
  .active::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: red;
    bottom: -2px;
    left: 50%;
    transform: translate(-50%);
  }

  .sole {
    background-color: red;
    border-bottom: 1px solid #a40011;
    width: 100%;
    display: flex;
    justify-content: center;

    &>div {
      width: 45%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 25px;

      a:first-of-type {
        margin-left: 68px;
      }

      a {
        color: #fff;
        font-size: 14px;
        transform: scale(0.7);
        padding: 0 15px;
      }

      a:nth-of-type(3) {
        position: relative;
      }

      a:nth-of-type(3)::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: url(https://s2.music.126.net/style/web2/img/white-r-icon@3x.png?3e0b5df37a140a7e845cb225e7fb558f);
      }
    }
  }

  .solid {
    background-color: red;
    height: 5px;
  }
}
//样式切换
.active {
    background-color: #000;
    color: #fff !important;
    position: relative;
  }
.activec {
  background-color: #9B0909;
  border-radius: 20px;
}
</style>