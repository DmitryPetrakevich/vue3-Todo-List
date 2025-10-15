<template>
  <div class="mobile-menu" :class="{ open: isOpen }">
    <div class="mobile-menu__container">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="mobile-menu__btn"
        @click="handleClick(tab.id)"
      >
        {{ tab.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  emits: ["change-tab", "close"],
  data() {
    return {
      tabs: [
        { id: "todo", title: "Todo-List" },
        { id: "pomodoro", title: "Pomodoro" },
        { id: "notes", title: "Notes" },
      ],
    };
  },
  methods: {
    handleClick(id) {
      this.$emit("change-tab", id);
      this.$emit("close"); 
    },
  },
};
</script>

<style lang="less">
.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: calc(100vh - 60px);
  background: #e2e2e2;
  border-right: 1px solid grey;
  z-index: 300;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    display: none;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  &__btn {
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #42b983;
    padding: 8px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #36996b;
    }
    &:active {
      background-color: #2c7c57;
    }
  }
}
</style>
