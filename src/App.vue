<template>
  <div class="wrapper">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
.wrapper {
  min-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.container {
margin: 0 auto;
width: 95%;
display: flex;
justify-content: center;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
h1 {
  margin: 0;
}

</style>
