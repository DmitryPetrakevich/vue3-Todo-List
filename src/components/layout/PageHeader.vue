<template>
  <header class="page-header">
    <div class="page-header__container">
      <a href="#" class="page-header__logo">
        <img
          src="@/assets/images/logo.svg"
          class="page-header__logo-img"
          width="202"
          height="147"
        />
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background-color: #e2e2e2;
  border-bottom: solid 1px grey;

  &__container {
    /* Контейнер, нужно будет сделать миксин */
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    max-width: 1414px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 5px 0;
  }

  &__logo-img {
    display: block;
    height: 80px;
    width: auto;
    object-fit: contain;
  }
}
</style>
