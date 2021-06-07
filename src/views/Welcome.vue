<template>
    <div class="welcome">
        <h1 class="title">Memory Card Game</h1>
        <router-link to="/Cards">Начать игру</router-link>
    </div>
</template>

<style lang="scss" scoped>

.welcome {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 80px;
}
</style>
