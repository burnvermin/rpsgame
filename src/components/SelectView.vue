<template>
    <div>
        <div class="content">
            <div class="triangle">
                <img :src="images.triangle" alt="triangle" >
            </div>
            <div class="papper" @click="papper">
                <img :src="images.papper" alt="papper" >
            </div>
            <div class="scissors" @click="scissors">
                <img :src="images.scissors" alt="scissors" >
            </div>
            <div class="rock" @click="rock">
                <img :src="images.rock" alt="rock" >
            </div>
        </div>
    </div>
</template>

<script>
import triangle from '@/assets/bg-triangle.svg'
import rock from '@/assets/icon-rock.svg'
import papper from '@/assets/icon-paper.svg'
import scissors from '@/assets/icon-scissors.svg'

export default {
    name: 'SelectView',
    data() {
        return {
            images: {
                triangle: triangle,
                rock: rock,
                papper: papper,
                scissors: scissors,
            },
            option: ''
        }
    },
    computed : {

    },
    methods: {
        papper () {
            this.option = 'papper'
            this.$emit( 'choice', this.option)
            console.log(this.option)
        },
        scissors () {
            this.option = 'scissors'
            this.$emit( 'choice', this.option)
        },
        rock () {
            this.option = 'rock'
            this.$emit( 'choice', this.option)
        }
    }
}
</script>

<style scoped lang="scss">

.content {
    margin: auto auto ;
    position: relative;
    width: 200px;
    height: 250px;
    max-width: 500px;
    z-index: 2;
    justify-content: center;
    .triangle img {
        width: 100%;
        margin-top: 20%;
    }
    .papper {
        position: absolute;
        top: 0;
        left: -3rem;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
        border-bottom: 5px solid hsl(230, 70%, 30%);
    }
    .scissors {
        position: absolute;
        top: 0;
        right: -3rem;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        border-bottom: 5px solid hsl(39, 78%, 21%);
    }
    .rock {
        position: absolute;
        bottom: 0;
        left: (100px - 48px);
        z-index: 2;
        background-image: linear-gradient(to top,hsl(349, 71%, 52%) , hsl(349, 70%, 56%));
        border-bottom: 5px solid hsl(349, 61%, 21%);
    }
    .papper::before {
        content: '';
        position: absolute;
        top: 14%;
        left: 15%;
        padding: 35px;
        border-radius: 180px;
        background-color: #fff;
        border-top: 5px solid rgba(119, 94, 130, .5);
        z-index: -1;
    }
    .scissors::before {
        content: '';
        position: absolute;
        top: 14%;
        left: 15%;
        padding: 35px;
        border-radius: 180px;
        background-color: #fff;
        border-top: 5px solid rgba(119, 94, 130, .5);
        z-index: -1;
    }
    .rock::before {
        content: '';
        position: absolute;
        top: 14%;
        left: 15%;
        padding: 35px;
        border-radius: 180px;
        background-color: #fff;
        border-top: 5px solid rgba(119, 94, 130, .5);
        z-index: -1;
    }
    .papper,.rock,.scissors{

        img {
            width: 30px;
            height: 30px;
        }
        padding: 35px;
        border-radius: 180px;
        cursor: pointer;
    }
}
</style>