<template>
    <div class="container">
        <div class="top">
            <div class="logo">
                <img :src="images.logo" alt="logo" >
            </div>
            <div class="score">
                <h5>SCORE</h5>
                <h1>{{ userScore }}</h1>
            </div>
        </div>
        <div class="middle">
            <SelectView v-if="chosen==`user`" @choice="getChoice"></SelectView>
            <AiView v-else-if="chosen==`ai`"  @aiChoice="getAIChoice" :userChoice="usersChoice"></AiView>
            <ResultView v-else  @score="score" @playAgain="playAgain" :userChoice="usersChoice" :aiChoice="aiChoice"></ResultView>
        </div>
        <div class="rules">
            <div class="overlay"></div>
            <div class="images">
                <img :src="images.rules" alt="rules" />
            </div>
            <img :src="images.close" alt="close" id="close" @click="hideRules"/>
        </div>
        <div class="bottom">
            <button @click="showRules" >RULES</button>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo.svg'
import SelectView from '../components/SelectView.vue'
import AiView from '../components/AiView.vue'
import ResultView from '../components/ResultView.vue'
import rules from '@/assets/image-rules.svg'
import close from '@/assets/icon-close.svg'

export default {
    name: "PlayGame",
    components: {
    SelectView,
    AiView,
    ResultView
},
    data() {
        return {
            images: {
                logo: logo,
                rules: rules,
                close: close
            },
            userScore: 0,
            test: 'aha',
            chosen: 'user',
            usersChoice: '',
            aiChoice: ''
        };
    },
    methods: {
        getChoice (value) {
            this.usersChoice = value
            if (this.usersChoice) {
                this.chosen= "ai"
            }
        },
        getAIChoice (value) {
            this.aiChoice = value
            if (this.aiChoice) {
                this.chosen= ""
            }
        },
        score (value) {
            if (value < 0 && this.userScore == 0) {
                this.userScore == 0
            } else {                
                this.userScore += value
            }
        },
        playAgain (value) {
            this.chosen = value
        },
        showRules () {
            document.querySelector('.rules').classList.add('active')
        },
        hideRules () {
            document.querySelector('.rules').classList.remove('active')
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    padding: 10% 10%;
    justify-content: center;

    .top {
        border: 3px solid hsl(217, 16%, 45%);
        border-radius: 5%;
        display: flex;
        flex-direction: row;
        padding: 5%;
        .logo {
            flex: 20%;
            margin: auto;
            img  {
                width: 80px;
                margin-top: 3%;
            }
        }
        .score {
            background-color: #fff;
            padding: 5px 20px;
            border-radius: 10%;
            flex: 0%;     
            margin-left: 30%;
            h5 {
                color: hsl(229, 64%, 46%);
                margin: 0;
            }
            h1 {
               color: hsl(229, 25%, 31%);
               margin: 0;
               font-size: 35px;
            }
        }
    }
    .middle {
        margin: 55% auto 0;
        position: relative;
    }
    .rules {
        display: none
    }
    .rules.active {
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        z-index: 5;
        .overlay {
            position: absolute;
            top: 0;
            background-color: rgba(0, 0, 0, .3);
            backdrop-filter: blur(5px);
            width: 100vw;
            height: 100vh;
            z-index: 5;
        }
        .images {
            position: relative;
            z-index: 6;
            margin: 85% 12%;
            background-color: #fff;
            padding: 5%;
            border-radius: 10px;
            box-shadow: 0px 15px 15px #000;
        }
        #close {
            position: absolute;
            z-index: 6;
            left: 60%;
            bottom: 0;
            background-color: #fff;
            border-radius: 180px;
            padding: 10px;

        }
    }
    .bottom {
        button {
            position: absolute;
            bottom: 5%;
            left: 38%;
            border: 3px solid hsl(217, 16%, 45%);
            outline: none;
            background: none;
            border-radius: 5px;
            color: hsl(217, 16%, 45%);
            font-size: 15px;
            padding: 5px 25px;
            cursor: pointer;
        }
    }
}
</style>