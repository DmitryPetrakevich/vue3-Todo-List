<template>
    <div class="reset-confirm-model" @click.self="$emit('noReset')">
        <div class="reset-confirm-model__container">
            <span class="reset-confirm-model-text">
                При сбросе таймера вся статистика за последнюю сессию не 
                сохраниться. <strong>Продолжить?</strong> 
            </span>

            <hr class="reset-confirm-model-dividar" />
            
            <div class="reset-confirm-model-btns">
                <button 
                class="reset-confirm-model-btn-no"
                @click="$emit('noReset')"
                >
                    нет
                </button>
                    
                <button 
                @click="$emit('yesReset')"
                class="reset-confirm-model-btn-yes"
                >
                    Да
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.reset-confirm-model {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5004;
}

.reset-confirm-model__container {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
    padding: 20px;
    border: 2px solid green;
    background-color: white;
    border-radius: 5px;
}

.reset-confirm-model-text {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.3;
}

.reset-confirm-model-dividar {
    width: 100%;
    margin-bottom: 10px;
}

.reset-confirm-model-btns {
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.reset-confirm-model-btn-no {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0;
    font-size: 20px;
    color: white;
    background-color: rgb(154, 154, 154);
    border-radius: 5px;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgb(140, 139, 139);
    }
}

.reset-confirm-model-btn-yes {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0;
    font-size: 20px;
    color: white;
    background-color: #42b983;
    border-radius: 5px;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #36996b;
    }
}



</style>