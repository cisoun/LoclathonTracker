<template>
  <div id="app">
    <component :is="layout">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <transition>
        <router-view/>
      </transition>
    </component>
  </div>
</template>

<script>
export default {
  data: () => ({
    default_layout: 'default'
  }),

  computed: {
    layout () {
      return (this.$route.meta.layout || this.default_layout) + '-layout';
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
h1 { padding: 3rem 0 2rem 0}
</style>
