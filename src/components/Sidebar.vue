!<template>
  <div class="sidebar">
    <div class="sidebar__container">
        <button
        class="sidebar-btn"
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('changeTab', tab.id)"
        :class="{active : activeTab === tab.id}"
        >
        {{ tab.title }}
        </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'activeTab'
  ],

  data() {
    return {
      tabs: [
        {id: 'todo', title: 'Todo-List'},
        {id: 'habits', title: 'Habits'},
      ]

    }
  }
};
</script>

<style lang="less">
.sidebar {
    position: fixed;
    left: 0;
    top: 110px;
    width: 300px;
    height: calc(100vh - 110px);    
    border: solid 1px black;
    border-top: none;
    background-color: #e9edf5;
    

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    &-btn {
        display: block;
        box-sizing: border-box;
        width: 80%;
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 10px;
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