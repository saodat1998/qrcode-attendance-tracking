<template>
    <div class="pt-3">
        <b-modal
                size="xl"
                id="modalPopover"
                modal-class="myModal"
                content-class="myContent"
                header-class="myHeader"
                body-class="myBody"
                title="Please scan the given code"

                ref="my-modal"
        >
        <b-row>
            <b-col md="7">
                    <div class="qr">
                        <qrcode-vue
                                :background="background"
                                :foreground="foreground"
                                :value="value"
                                :size="size"
                                level="H">
                        </qrcode-vue>
                    </div>
                    <!--<p>-->
                        <!--This-->
                        <!--<b-button v-b-popover="'Popover inside a modal!'" title="Popover">Button</b-button>-->
                        <!--triggers a popover on click.-->
                    <!--</p>-->
                    <!--<p>-->
                        <!--This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will show a tooltip on-->
                        <!--hover.-->
                    <!--</p>-->

            </b-col>

            <b-col md="4" class="pr-2">

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
                            <b-row>
                                <!--<b-col md="6" offset="6" class="pt-5">-->
                                    <!--<b-button-->
                                            <!--variant="info"-->
                                            <!--class="pause"-->
                                            <!--@click="finish"-->
                                            <!--size="sm"-->
                                    <!--&gt;-->
                                        <!--Finish-->
                                    <!--</b-button>-->
                                <!--</b-col>-->
                                <p>Using your phone, please SCAN the given QRcode ONCE only</p>
                                <b-col md="6" offset="6" class="pt-5">

                                    <b-button class="mt-3" size="sm" variant="outline-info" @click="hideModal">Finish</b-button>

                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </div>
            </b-col>
        </b-row>
        </b-modal>
        <b-row>
            <b-col md="12">
                <Students></Students>
            </b-col>
            <b-col md="12">
            <b-button
                    @click="showAttendance"
                    size="sm"
                    v-b-modal.modalPopover
                    class="mb-2"
            >
                Attendance
            </b-button>
            </b-col>


        </b-row>

    </div>
</template>
<script>

    import QrcodeVue from 'qrcode.vue';
    import { db } from '../db';
    import 'firebase/database';
    import Students from "./Students";
    const items = db.ref('qrCode');
    const students = db.ref('qrCodeFromStudent');
    export default {
        name: 'QrCode',

        data() {
            return {
                timer: null,
                bgTimer: null,
                editTime: 0,
                totalTime: (5 * 60),
                resetButton: false,
                title: "Countdown to rest time!",
                edit: false,
                value: 'https://example.com',
                size: 600,
                background: '#ddc5ff',
                allow: false,
                foreground: '#002fa2'
            }
        },
        // firebase: {
        //     items: db.ref('qrCode')
        // },
        components: {
            Students,
            QrcodeVue
        },
        methods: {
            hideModal() {
                this.$refs['my-modal'].hide()
            },
            rndStr(len) {
                let text = ' ';
                let chars = '1234567890abcdefghijklmnopqrstuvwxyz';
                for( let i=0; i < len; i++ ) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return text
            },
            rndBg(){
                var myBg = ["#1adefe", "#82caaf", "#75c0e0",
                    "#1adefe", "#39a275", "#7b67df"];
                let bg =myBg[Math.floor(Math.random()*myBg.length)];
                return bg;
            },
            startTimer: function() {
                this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
                this.resetButton = true;
                this.edit = false;
                this.setBg();

                },
            setBg: function(){
                this.allow = true;
                this.bgTimer = setInterval(() => {
                    let b = this.rndBg();
                    let val = this.rndStr(5) + '.com';
                    if(this.allow) {
                        this.value = val;
                        this.background = b;
                        items.push(this.value);
                    }
                }, 3000);
            },
            stopTimer: function() {
                clearInterval(this.timer);
                this.timer = null;
                this.resetButton = true;
                this.invalidate();
            },
            resetTimer: function() {
                this.totalTime = (5 * 60);
                clearInterval(this.timer);
                this.invalidate();
            },
            editTimer: function() {
                this.edit = true;
                this.invalidate();
            },
            padTime: function(time){
                return (time < 10 ? '0' : '') + time;
            },
            countdown: function() {
                if(this.totalTime === 0){
                   this.finish();
                }else{
                    this.totalTime--;
                }
            },
            invalidate: function () {
                this.allow = false;
                this.value = 'invalid';
                this.background = '#000000';
                this.foreground = "#000000";
                clearInterval(this.bgTimer);
            },
            finish(){
                // clearInterval(this.timer);
                // this.timer=null;
                items.remove();
                // this.invalidate();
                this.stopTimer();
                // this.$router.replace(this.$route.query.redirect || '/last');
            },
            showAttendance(){

            },

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
<style>
    .timer {
        font-size: 5rem;
    }
    .controls {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        transition: 0.1s ease;
        cursor: pointer;
        transform: scale(1.2);
    }
    @media (min-width: 576px) {
        .modal-dialog {
            max-width: 1200px;
            margin: 1.75rem auto;
        }
    }
    .myModal{
        margin-top: -22px!important;
        overflow-y: hidden!important;
    }
    .myContent{
        height: 100%!important;
    }
    .myHeader{
        padding: 5px!important;
    }
    .myBody{


    }


</style>
