<template>
    <div >
        <button class="new-note-btn">
            Добавить заметку
        </button>
    </div>

</template>

<script>
export default {};
</script>

<style scoped lang="less">
.new-note-btn {
    display: block;
    box-sizing: border-box;
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 30px;
    border: 1px solid darkgreen;
    border-radius: 2px;
    color: rgb(255, 255, 255);
    background-color: #a9a9a9;
    padding: 6px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5e5e5e;
    }

    &:active {
      background-color: #4f9ee2;
    }
  }
</style>
