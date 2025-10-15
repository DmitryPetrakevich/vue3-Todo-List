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

      <button
        class="hamburger"
        @click="$emit('toggle-sidebar')"
        aria-label="Открыть меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['toggle-sidebar'],
};
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
  box-sizing: border-box;
  border-bottom: solid 1px grey;

  &__container {
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

.hamburger {
  display: none; 
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200; 

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 1024px) {
    display: flex; 
  }
}
</style>
