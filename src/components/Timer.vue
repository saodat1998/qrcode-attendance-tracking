<template>
    <div >
    <b-container>
        <div class="timer">
            <span class="minute">{{ minutes }}</span>
            <span>:</span>
            <span class="seconds">{{ seconds }}</span>
        </div>
    </b-container>
    <div class="controls">
        <b-container>
        <b-row>
            <b-col md="6" class="pt-2">
                <b-button class="start" v-if="!timer" @click="startTimer">
                    Start
                </b-button>
            </b-col>
            <b-col md="6" class="pt-2">
                <b-button class="edit" v-if="!timer" @click="editTimer">
                    Edit
                </b-button>
            </b-col>
            <b-col md="6" class="pt-2">
                <b-button class="stop" v-if="resetButton" @click="resetTimer">
                    Reset
                    <i data-feather="rotate-cw"></i>
                </b-button>
            </b-col>

            <b-col md="6" class="pt-2">
                <b-button class="pause"  v-if="timer" @click="stopTimer">
                    Pause
                </b-button>
            </b-col>

        </b-row>
        <b-row class="pl-5 pt-3">
            <b-col md="10">
                <b-form-input  v-if="edit" id="range-2"
                               v-model="totalTime" type="range"
                               min="0" max="1800" step="1"
                ></b-form-input>
                <label  v-if="edit"  for="range-2">Minutes</label>
            </b-col>
        </b-row>
        </b-container>
    </div>


</div>
</template>

<script>

    export default {
        name: "Timer",
        data(){
            return{
                timer: null,
                editTime: 0,
                totalTime: (5 * 60),
                resetButton: false,
                title: "Countdown to rest time!",
                edit: false,
            }
        },

        methods:{
            startTimer: function() {
                this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
                this.resetButton = true;
                this.edit = false;
            },
            stopTimer: function() {
                clearInterval(this.timer);
                this.timer = null;
                this.resetButton = true;
            },
            resetTimer: function() {
                this.totalTime = (5 * 60);
                clearInterval(this.timer);
                this.timer = null;
                this.resetButton = false;
            },
            editTimer: function() {
                this.edit = true;
            },
            padTime: function(time){
                return (time < 10 ? '0' : '') + time;
            },
            countdown: function() {

                if(this.totalTime === 0){
                    this.$router.replace(this.$route.query.redirect || '/home');
                }else{
                    this.totalTime--;
                }
            }
        },
        computed: {
            minutes(){
                const minutes = Math.floor(this.totalTime / 60);
                return this.padTime(minutes);
            },
            seconds() {
                const seconds = this.totalTime - (this.minutes * 60);
                return this.padTime(seconds);
            },
        },

    }
</script>

<style scoped>
    html {
        font-size: 10px;
    }
    .timer {
        font-size: 8rem;
    }
    .controls {
        display: flex;
        justify-content: space-evenly;
        width: 100%;


        transition: 0.1s ease;

        cursor: pointer;
        transform: scale(1.2);
    }


    .input input {
        border: none;
        font-size: 2rem;
        padding: 1em;
        text-align: center;
    }
</style>