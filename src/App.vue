<template>
  <router-view/>
</template>

<style lang="scss">
html, head, body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  height: 100%;
}
.wrapper {
  overflow: hidden;
  min-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
}
.start {
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
