<template>
    <div class="qr">
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        {{value}}
    </div>
</template>
<script>
    import QrcodeVue from 'qrcode.vue';

    export default {
        name: 'QrCode',
        data() {
            return {
                value: 'https://example.com',
                size: 400,
                intervalid1:'',
            }
        },
        components: {
            QrcodeVue
        },
        methods: {
            rndStr(len) {
                let text = ' '
                let chars = '1234567890abcdefghijklmnopqrstuvwxyz'

                for( let i=0; i < len; i++ ) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length))
                }

                return text
            }
        },
        mounted () {
            setInterval(() => {
                let value = this.rndStr(5)

                this.value = value
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
