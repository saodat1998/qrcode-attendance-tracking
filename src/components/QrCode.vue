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
        computed:{
            changes : {
                get : function(){
                    return this.value;
                },
                set: function (v) {
                    this.value = v;
                }
                }
        },
        mounted(){
            this.sayHi();
        },
        beforeDestroy () {
            clearInterval(this.intervalid1)
        },
        methods:{
            sayHi: function () {
                const v = this;
                setTimeout(function () {
                    v.changes = ((Math.random() * 100).toFixed(2))+'%';
                    console.log(v.changes);
                    }.bind(this), 3);
            },
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