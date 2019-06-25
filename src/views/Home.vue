<template>
  <div class="home">
    <h1>{{ $t('hello') }}</h1>

    <p>Bienvenue à la tournée de l'absinthe.</p>
    <p>Connecte-toi à ton compte afin de pouvoir enregistrer ton parcours.</p>

    <router-link to="/login" class="btn btn-dark btn-lg btn-block">{{ $t('login') }}</router-link>
    <router-link to="/register" class="btn btn-link btn-block">{{ $t('pages.register.submit') }}</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>

<style>
.home {
  text-align: justify;
}
</style>
