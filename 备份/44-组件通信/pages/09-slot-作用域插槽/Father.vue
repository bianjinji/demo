<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Game title="热门游戏列表">
                <template v-slot="params">
                  <ul>
                    <li v-for="g in params.youxi" :key="g.id">{{g.name}}</li>
                  </ul>
                </template>
            </Game>

            <Game title="热门游戏列表">
                <template v-slot="params">
                  <ol>
                    <li v-for="g in params.youxi" :key="g.id">{{g.name}}</li>
                  </ol>
                </template>
            </Game>

            <Game title="热门游戏列表">
                <template v-slot="params">
                  
                    <h3 v-for="g in params.youxi" :key="g.id">{{g.name}}</h3>
                  
                </template>
            </Game>
        </div>
    </div>

</template>

<script setup lang="ts" name="father">
import Game from './Game.vue';



</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>