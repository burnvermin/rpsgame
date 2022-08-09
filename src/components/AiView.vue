<template>
    <div>
        <div class="container-ai">
            <div class="user">
                <div v-if="user==`papper`" class="papper">
                    <img :src="images.papper" alt="papper" >
                </div>
                <div v-else-if="user==`scissors`" class="scissors">
                    <img :src="images.scissors" alt="scissors" >
                </div>
                <div v-else class="rock">
                    <img :src="images.rock" alt="rock" >
                </div>
            </div>
            <div class="ai">
                <div v-if="ai==`papper`" class="papper">
                    <img :src="images.papper" alt="papper" >
                </div>
                <div v-else-if="ai==`scissors`" class="scissors" >
                    <img :src="images.scissors" alt="scissors" >
                </div>
                <div v-else class="rock" >
                    <img :src="images.rock" alt="rock" >
                </div>
            </div>
        </div>
        <div class="texts">
            <h1>YOU PICKED</h1>
            <h1 id="house">THE HOUSE PICKED</h1>
        </div>
    </div>
    
</template>

<script>
import rock from '@/assets/icon-rock.svg'
import papper from '@/assets/icon-paper.svg'
import scissors from '@/assets/icon-scissors.svg'

export default {
    name: 'ResultView',
    props: {
        userChoice: [String]
    },
    data() {
        return {
            user: this.userChoice,
            ai: '',
            images: {
                rock: rock,
                papper: papper,
                scissors: scissors
            },
        }
    },
    created () {
        this.getAiInput()
        setTimeout(() => document.querySelector('.ai').classList.add('show'), 5);
    },
    methods: {
        getAiInput () {
            let rand = Math.floor(Math.random() * 3)
            if(rand == 0) {
                this.ai = 'papper'
            } else if(rand == 1) {
                this.ai = 'scissors'
            } else {
                this.ai = 'rock'
            }
            this.$emit( 'aiChoice', this.ai)
        }
        
    }
}
</script>


<!-- <style scoped lang="scss">
$medium: 500px;

@media screen and (min-width: $medium) {
}
.container-ai {
    display: flex;
    flex-direction: row;
    position: relative;
    color: #fff;
}
.user {
    position: relative;
    width: 200px;
    height: 110px;
    max-width: 500px;
    z-index: 2;
    transform: scale(1.2);
    .papper {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
        border-bottom: 5px solid hsl(230, 70%, 30%);
    }
    .scissors {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        border-bottom: 5px solid hsl(39, 78%, 21%);
    }
    .rock {
        position: absolute;
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
.ai {
    margin-left: 20%;
    position: relative;
    width: 200px;
    height: 110px;
    max-width: 500px;
    z-index: 2;
    transform: scale(1.2);
    .papper {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
        border-bottom: 5px solid hsl(230, 70%, 30%);
    }
    .scissors {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        border-bottom: 5px solid hsl(39, 78%, 21%);
    }
    .rock {
        position: absolute;
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
.texts {
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 8px;
    margin: 5% 0;
    #house {
        margin-left: 20%;
    }
}
</style> -->


<style scoped lang="scss">

$medium: 500px;

.container-ai {
    margin: auto auto ;
    width: 200px;
    display: flex;
    flex-direction: row;
    position: relative;
    color: #fff;
}
.user {
    position: relative;
    margin-left: -20%;
    width: 200px;
    height: 110px;
    max-width: 500px;
    z-index: 2;
    transform: scale(1.2);
    .papper {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
        border-bottom: 5px solid hsl(230, 70%, 30%);
    }
    .scissors {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        border-bottom: 5px solid hsl(39, 78%, 21%);
    }
    .rock {
        position: absolute;
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
.ai {
    margin-left: 65%;
    position: relative;
    width: 200px;
    height: 110px;
    max-width: 500px;
    z-index: 2;
    transform: scale(1.2);
    .papper {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%));
        border-bottom: 5px solid hsl(230, 70%, 30%);
    }
    .scissors {
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        border-bottom: 5px solid hsl(39, 78%, 21%);
    }
    .rock {
        position: absolute;
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
.ai::after {
    content: '';
    width: 110px;
    height: 110px;
    max-width: 500px;
    border-radius: 180px;
    background-color: #000;
    position: absolute;
    visibility: visible;
    z-index: 2;
    top: -2%;
    left: -2%;
}
.ai.show::after {
    visibility: hidden;
    transition: 300ms;
}
.texts {
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 8px;
    margin: 5%;
    width: 80vw;
    h1 {
        margin-left: 5%;
    }
    #house {
        position: absolute;
        right: 0;
    }
}

  @media screen and (min-width: $medium) {
    .container-ai {
        margin: 15% auto 0;
        width: 80%;
        .user {
            margin-left: 30%;
            transform: scale(1.7);
        }
        .ai {
            margin-left: 5%;
            transform: scale(1.7);
        }
    }
    .texts {
        width: 50%;
        margin: auto;
        position: relative;
        margin-top: -25%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
        h1 {
            margin-left: 9%;
        }
        #house {
            right: 2%;
        }
    }
  }

</style>