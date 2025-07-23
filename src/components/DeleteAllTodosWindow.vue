<template>
    <div class="delete-todos-window" @click.self="$emit('cancel')">
        <div class="delete-todos-window__container">
            <p>
                Вы уверены что хотите удалить все заметки?
            </p>
            <div class="delete-todos-window-btns">
                <button class="delete-todos-window-btn">
                    <span 
                    @click="$emit('cancel')"
                    class="delete-todos-window-btn-text"
                    >
                    Закрыть
                    </span>
                </button>


                <button class="delete-todos-window-btn">
                    <span 
                    @click="$emit('confirm')"
                    class="delete-todos-window-btn-text"
                    >
                    Удалить
                </span>
                </button>

            </div>


        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {

    },


};
</script>

<style lang="less">
.delete-todos-window {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
//   width: 100vw;
//   height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); // затемнение фона
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500; // выше обычных элементов
}

.delete-todos-window__container {
    display: block;
    position: relative;
    height: 100px;
    width: 300px;
    z-index: 50;
    padding: 20px 40px;
    background-color: white;
    border: 2px solid rgb(169, 3, 3);
    border-radius: 5px;
}

.delete-todos-window-btns {
    display: flex;

}

.delete-todos-window-btn {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: none;
    background-color: transparent;
}

.delete-todos-window-btn-text {
    cursor: pointer;
}
</style>