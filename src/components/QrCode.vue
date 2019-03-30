<template>
    <div>
        <b-row>
            <b-col>
                <qrcode-vue :background="background" :value="value" :size="size" level="H"></qrcode-vue>
            </b-col>
            <b-col>

            </b-col>
            <b-col>

            </b-col>
        </b-row>

    </div>
</template>
<script>
    import QrcodeVue from 'qrcode.vue';

    export default {
        name: 'QrCode',

        data() {
            return {
                qrCls: 'qrcode',
                value: 'https://example.com',
                size: 400,
                background: '#E91E63',
                minutes:0,
                secondes:0
            }
        },
        components: {
            QrcodeVue
        },
        methods: {
            rndStr(len) {
                let text = ' ';
                let chars = '1234567890abcdefghijklmnopqrstuvwxyz';
                for( let i=0; i < len; i++ ) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return text
            },
            rndBg(){
                let bg = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                if(bg !== '#000000')
                return bg;
            },

        },
        mounted () {
            setInterval(() => {
                let b = this.rndBg();
                let val = this.rndStr(5);
                this.value = val;
                this.background = b;
            }, 3000)
        }
    }
</script>
<style>
    .qr{
        border: 1px solid black;
        padding: 10px;
        margin-left: 10%;
    }
</style>
