<template>
    <div>
        <div class="container-ai">
            <div class="user">
                <div class="circles"> </div>
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
                <div class="aiWin win"> </div>
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
        <div class="resultTexts">
            <h1>YOU PICKED</h1>
            <h1 id="house">THE HOUSE PICKED</h1>
        </div>
        <div class="texts">
            <h1>{{result}}</h1>
            <button @click="playAgain" class="button">PLAY AGAIN</button>
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
        userChoice: [String],
         aiChoice: [String]
    },
    data() {
        return {
            user: this.userChoice,
            ai: this.aiChoice,
            aiAns: 3,
            userAns: 3,
            result: '',
            Result: false,
            score: null,
            images: {
                rock: rock,
                papper: papper,
                scissors: scissors
            },
        }
    },
    created () {
        this.assign()
        setTimeout(() => this.check(), 500);
        setTimeout(() => document.querySelector('.button').classList.add('delay'), 500);
        this.$emit('score', this.score)
    },
    methods: {
        assign () {
            if (this.ai === 'papper') {
                this.aiAns = 1
            } else if (this.ai === 'scissors') {
                this.aiAns = 2
            } else {
                this.aiAns = 3
            }
            if (this.user === 'papper') {
                this.userAns = 1
            } else if (this.user === 'scissors') {
                this.userAns = 2
            } else {
                this.userAns = 3
            }
        },
        async check () {
            if(this.userAns === this.aiAns){// Draw
                this.result = 'Draw'
                document.querySelector('.aiWin').classList.remove('win')
                document.querySelector('.circles').classList.remove('win')
                this.score = this.score
                return this.Result = 1
            } else if ( this.userAns === 1 && this.aiAns === 2) {//Papper vs Scissors
                this.result =  'You lose'
                document.querySelector('.aiWin').classList.add('win')
                document.querySelector('.circles').classList.remove('win')
                this.score--
                return this.Result = 0
            } else if (this.userAns === 2 && this.aiAns === 1) {
                this.result = 'You win'
                document.querySelector('.circles').classList.add('win')
                document.querySelector('.aiWin').classList.remove('win')
                this.score++
                return this.Result = 2
            } else if ( this.userAns === 1 && this.aiAns === 3) {//Papper vs Rock
                this.result =  'You win'
                document.querySelector('.circles').classList.add('win')
                document.querySelector('.aiWin').classList.remove('win')
                this.score++
                return this.Result = 2
            } else if (this.userAns === 3 && this.aiAns === 1) {
                this.result = 'You Lose'
                document.querySelector('.aiWin').classList.add('win')
                document.querySelector('.circles').classList.remove('win')
                this.score--
                return this.Result = 0
            } else if ( this.userAns === 2 && this.aiAns === 3) {//Scissors vs Rock
                this.result =  'You lose'
                document.querySelector('.aiWin').classList.add('win')
                document.querySelector('.circles').classList.remove('win')
                this.score--
                return this.Result = 0
            } else if (this.userAns === 3 && this.aiAns === 2) {
                this.result = 'You win'
                document.querySelector('.circles').classList.add('win')
                document.querySelector('.aiWin').classList.remove('win')
                this.score++
                return this.Result = 2
            }
        },
        playAgain () {
            this.$emit('playAgain', 'user')
        }
    }
}
</script>


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
.circles {
    opacity: 0;
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 270px;
    height: 270px;
    top: -70%;
    left: -150%;
    border-radius: 180px;
    z-index: -7;
}
.circles::before {
    content: '';
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 230px;
    height: 230px;
    top: 7%;
    left: 8%;
    border-radius: 180px;
    z-index: -7;
}
.circles::after {
    content: '';
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 180px;
    height: 180px;
    top: 15%;
    left: 16%;
    border-radius: 180px;
    z-index: -7;
}
.aiWin {
    opacity: 0;
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 270px;
    height: 270px;
    top: -70%;
    left: -150%;
    border-radius: 180px;
    z-index: -7;
}
.aiWin::before {
    content: '';
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 230px;
    height: 230px;
    top: 7%;
    left: 8%;
    border-radius: 180px;
    z-index: -7;
}
.aiWin::after {
    content: '';
    background-color: rgb(255, 255, 255, .05);
    position: absolute;
    width: 180px;
    height: 180px;
    top: 15%;
    left: 16%;
    border-radius: 180px;
    z-index: -7;
}
.win {
    opacity: 1;
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
.resultTexts {
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
.texts {
    margin-top: 328;
    color: #fff;
    text-align: center;
    h1 {
        font-size: 45px;
        font-weight: bolder;
        text-transform: uppercase;
    }
    .button {
        display: none;
        font-size: 22.5px;
        outline: none; 
        border: none;
        background-color: #fff;
        color: #000;
        padding: 5% 15%;
        border-radius: 10px;
    }
    .button.delay {
        display: inline;
    }

}
  @media screen and (min-width: $medium) {
    .container-ai {
        margin: 15% auto 0;
        width: 80%;
        .circles {
            left: -47%;
        }
        .aiWin {
            left: -47%;
        }
        .user {
            margin-left: 0%;
        }
        .ai {
            margin-right: -20%;
        }
    }
    .resultTexts {
        width: 110%;
        margin: auto;
        position: relative;
        margin-top: -25%;
        font-size: 18px;
        h1 {
            margin-left: 5%;
        }
        #house {
            right: 3%;
        }
    }
    .texts {
        width: 300px;
        margin: auto;
    }
  }

</style>
