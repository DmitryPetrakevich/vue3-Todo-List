<template>
    <header class="page-header">
        <div class="page-header__container">
            <a href="#" class="page-header__logo">
                <img src="@/assets/images/logo.svg" class="page-header__logo-img"  width= "202" height= "147">
            </a>

            <nav class="page-header__nav">
                <a href="О" class="page-header__nav-link">О нас</a>
                <a href="#" class="page-header__nav-link">Контакты</a>
                <a href="#" class="page-header__nav-link">Сотрудниество</a>
            </nav>

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
    height: 110px;
    z-index: 100;
    background-color: #e9edf5;
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

    &__nav {
        box-sizing: border-box;
        display: flex;
        align-items: baseline;
        margin: 0 auto;
    }

    &__nav-link {
        margin: 0 25px;
        color: black;
        font-weight: 600;
        font-size: 18;
        line-height: 25px;
        text-decoration: none;
    }

    &__logo {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 5px 0;
    }

    &__loog-img {
        display: block;
        height: 40px;
        width: auto;
        object-fit: contain;

    }

}

</style>