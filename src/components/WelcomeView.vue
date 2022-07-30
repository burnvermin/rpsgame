<template>
    <div class="container">
        <h1>Rock <br> Papper <br> Sciccors</h1>
        <button >Play</button>
    </div>
</template>

<style scoped lang="scss">

@keyframes jiggle {
    0% {
        margin-left: -200%;
    }
    100% {
        margin-left: 400%;
    }
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    color: #fff;
    font-size: 35px;
    overflow: hidden;
    h1 {
        animation: jiggle 5s infinite ease-in-out ;
    }
    button {
        padding: 5% 20%;
        font-size: 20px;
        border: 2px solid #dff;
        color: #fff;
        border-radius: 10px;
        font-weight: bolder;
        letter-spacing: 10px;
        text-transform: uppercase;
        cursor: pointer;
        background: none;
        transition: all 500ms ease-in;
    }
    button:hover {
        background-color: #fff;
        color: #000;
        border: none;
        transition: all 500ms ease-in;
    }

}
</style>