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
            systemPowerDown: function(){
                this.value = 3232323 + ': Server Down';
            },
            systemReset: function(){
                this.message = this.server + ': Resetting';
                setTimeout(function () {
                    this.value = 222 + ': Reset'
                    window.console.log(343);
                }.bind(this))
            }
        },
    }
</script>
<style>
    .qr{
        border: 1px solid black;
        padding: 10px;
        margin-left: 10%;
    }
</style>
