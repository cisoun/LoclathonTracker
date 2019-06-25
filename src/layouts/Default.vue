<template>
  <div class="main container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-4">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
.main {
  background-color: #fff;
  color: #333;
  padding: 2rem;
}
</style>
