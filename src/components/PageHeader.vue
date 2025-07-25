<template>
    <header class="page-header">
        <div class="page-header__container">
            <a href="#" class="page-header__logo">
                <img src="@/assets/images/logo.svg" class="page-header__logo-img"  width= "202" height= "147">
            </a>

            <div class="page-header__theme">
                <button class="page-header__theme-btn">
                    Светлая тема
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {

};
</script>

<style lang="less">
.page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    background-color: #e2e2e2;
    border-bottom: solid 1px grey;

    &__container {
    /* Контейнер, нужно будет сделать миксин */
    box-sizing: border-box;
    width: 100%;
    max-width: 1414px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    }

    &__logo {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 5px 0;
    }

    &__logo-img {
        display: block;
        height: 100px;
        width: auto;
        object-fit: contain;

    }
    
    &__theme {
    margin-left: 20px;
  }

    &__theme-btn {
        position: relative;
        display: flex;
        align-items: center;
        width: 60px;
        height: 30px;
        padding: 0;
        border: none;
        border-radius: 15px;
        background: linear-gradient(145deg, #42b983, #36996b);
        cursor: pointer;
        box-shadow: 
        0 2px 5px rgba(0,0,0,0.2),
        inset 0 0 0 1px rgba(255,255,255,0.1);
        transition: all 0.3s ease;
        overflow: hidden;
        color: transparent;
        font-size: 0;

        /* Переключатель (круглая часть) */
        &::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Иконка солнца (светлая тема) */
        &::after {
        content: '☀️';
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s ease;
        }

        /* Состояние темной темы (добавится при переключении) */
        .dark-theme & {
        background: linear-gradient(145deg, #2c3e50, #34495e);

        &::before {
            left: calc(100% - 27px);
        }

        &::after {
            content: '🌙';
            left: 5px;
            right: auto;
            opacity: 1;
        }
        }

        &:hover {
        box-shadow: 
            0 3px 8px rgba(0,0,0,0.3),
            inset 0 0 0 1px rgba(255,255,255,0.2);
        }

        &:active {
        transform: scale(0.95);
        }
    }
}
</style>