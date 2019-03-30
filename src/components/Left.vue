<template>
    <div>
        <b-container>
         <div class="icon_container">
            <div class="icon">
                <img src="../assets/images/design/e5.png" alt="..." class="wobble-vertical">
            </div>
            <div class="icon_bg">
                <img src="../assets/images/design/b2.png" alt="...">
            </div>
            <div class="icon_exo">
                <img src="../assets/images/design/b1.png" alt="...">
            </div>
            <div class="icon_exo_2">
                <img src="../assets/images/design/b1.png" alt="...">
            </div>
        </div>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: "Left"
    }
</script>

<style scoped>
    .icon_container{
        display: block;
        margin-top: 45%;
        position: relative;
        width: 100%;
        left: 30%;
        height: 260px;
    }
    .icon{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
    *{
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }
    .icon_bg{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .icon_exo{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0.2;
    }
    .icon_exo_2{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0.2;
    }

    .icon_exo {
        -webkit-animation: icon_exo 1.9s 999 linear;
        -moz-animation: icon_exo 1.9s 999 linear;
        -o-animation: icon_exo 1.9s 999 linear;
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
    }


    @-webkit-keyframes icon_exo {
        from {-webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -moz-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -o-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
        }
        to {-webkit-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -moz-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -o-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            opacity: 0.1;
        }
    }
    @keyframes icon_exo_2 {
        from {-webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -moz-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -o-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
        }
        to {-webkit-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -moz-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -o-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
        }
    }
    .icon_exo_2 {
        -webkit-animation: icon_exo_2 1.9s 999 linear;
        -moz-animation: icon_exo_2 1.9s 999 linear;
        -o-animation: icon_exo_2 1.9s 999 linear;
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-delay: 1.8s;
        animation-delay: 1.8s;
    }
    @-webkit-keyframes icon_exo_2 {
        from {-webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -moz-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -o-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
        }
        to {-webkit-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -moz-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -o-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            opacity: 0.1;
        }
    }
    @keyframes ic_bg_exo_2 {
        from {-webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -moz-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
            -o-transform: rotate(0deg) scale(1) skew(0deg) translate(0px) ;
        }
        to {-webkit-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -moz-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
            -o-transform: rotate(0deg) scale(1.8) skew(0deg) translate(0) ;
        }
    }
</style>