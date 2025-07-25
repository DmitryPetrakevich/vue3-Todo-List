<template>
    <div class="delete-todos-window" 
    @click.self="$emit('cancel')"
    >
        <div class="delete-todos-window__container">
            <h2 class="delete-todos-window-title">
                Подтверждение
            </h2>
            <hr class="delete-todos-window-divider" />

            <p class="delete-todos-window-text">
                Вы действительно уверены что хотите удалить все задачи?
            </p>

            <div class="delete-todos-window-btns">
                <button class="delete-todos-window-btn-cancel" @click="$emit('cancel')">
                    <span class="delete-todos-window-btn-cancel-text">
                        Отменить
                    </span>
                </button>

                <button class="delete-todos-window-btn-confirm">
                    <span @click="$emit('confirm')" class="delete-todos-window-btn-confirm-text">
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
        return { }
    },

    mounted() {
        document.body.classList.add('no-scroll');
        document.addEventListener('keydown', this.handleKeyDown);
    },

    beforeUnmount() {
        document.body.classList.remove('no-scroll');
        document.removeEventListener('keydown', this.handleKeyDown)
    },

    methods: {
        handleKeyDown(e) {
            if(e.key === 'Escape') {
                this.$emit('cancel')
            }
        } 
    }
};
</script>

<style lang="less">
.delete-todos-window {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500; 
}

.delete-todos-window__container {
    display: block;
    position: relative;
    height: 220px;
    width: 500px;
    z-index: 50;
    padding: 10px 20px;
    background-color: white;
    border: 2px solid #42b983;
    border-radius: 5px;
}

.delete-todos-window-title {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-size: 34px;
}

.delete-todos-window-text {
    display: block;
    text-align: center;
    margin: 0;
    padding: 0 20px;
    padding-top: 15px;
    margin-bottom: 40px;
    font-size: 20px;
}

.delete-todos-window-divider {
    width: 100%;
}

.delete-todos-window-btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 120px;
}

.delete-todos-window-btn-cancel {
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid black;
    padding: 10px 40px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.4s;

    &:hover {
        background-color: rgb(233, 233, 233);
    }
}

.delete-todos-window-btn-confirm {
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: red;
}

.delete-todos-window-btn-cancel-text {
    font-size: 16px;
    font-weight: 500;
}

.delete-todos-window-btn-confirm-text {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: rgb(247, 118, 118);
    }
}

.no-scroll {
    overflow: hidden
}
</style>