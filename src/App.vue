<template>
  <router-view/>
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

img {
  max-width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h1 {
  margin: 0;
}

.wrapper {
  min-height: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;

}

.container {
margin: 0 auto;
width: 95%;
max-width: 1100px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}

</style>
