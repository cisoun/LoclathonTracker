<template>
  <div>
    <h1>{{ $t('pages.register.title') }}</h1>
    <form>
      <div class="form-group">
        <label for="formNickname">{{ $t('user.nickname') }}</label>
        <input type="text" class="form-control" id="formNickname" :placeholder="$t('pages.register.enter_nickname')">
      </div>
      <div class="form-group">
        <label for="formFullname">{{ $t('user.fullname') }}</label>
        <input type="text" class="form-control" id="formFullname" :placeholder="$t('pages.register.enter_fullname')">
      </div>
      <div class="form-group">
        <label for="formPassword">{{ $t('password') }}</label>
        <input type="password" class="form-control" id="formPassword" :placeholder="$t('password')">
      </div>
      <div class="form-group form-check">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="formRememberMe">
          <label class="custom-control-label" for="formRememberMe">{{ $t('pages.register.remember_me') }}</label>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-primary btn-block">{{ $t('pages.register.submit') }}</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'register',
}
</script>

<style>

</style>
