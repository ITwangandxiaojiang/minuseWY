<template>
  <div
    style="position: absolute; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.65); z-index: 100; top: 0;left: 0;">
    <div class="bg">
      <div class="top-block">
        <h3>登录</h3>
        <p @click="clearTk">x</p>
      </div>
      <div class="bot-block">
        <ErweimaLogin v-if="showe"></ErweimaLogin>
        <PhoneLogin v-else></PhoneLogin>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import ErweimaLogin from '../ErweimaLogin/ErweimaLogin.vue'
import PhoneLogin from '../PhoneLogin/PhoneLogin.vue'
const showe = ref(true);
const emit = defineEmits(['update'])
const clearTk = ()=>{
  emit('update',false)
}
</script>

<style lang="less" scoped>
.bg {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 25% 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  .top-block {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: #2d2d2d;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    h3 {
      font-style: normal;
      font-size: 12px;
      color: #fff;
    }

    p {
      color: #666;
    }
  }

  .bot-block {
    height: 300px;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>