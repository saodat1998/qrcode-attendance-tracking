<template>
    <div>
        <b-alert class="warn" variant="dark" v-if="error" show>
            Invalid id or password
        </b-alert>
        <b-container class="pr-5">

            <form @submit.prevent="check" v-if="!logged" class=" justify-content-center login" >
                <fieldset>
                    <div class="input">
                        <label class="form-check-label" for="name">ID</label>
                        <input type="text" required :v-bind="user" v-model="user" id="name"/>
                        <span class="tiny"><font-awesome-icon icon="user"/></span>
                    </div>
                    <div class="input">
                        <label class="form-check-label" for="password">Password</label>
                        <input type="password" :v-bind="password" v-model="password" id="password"/>
                        <span class="tiny"><font-awesome-icon icon="eye"/></span>
                    </div>
                    <button type="submit" class="submit"><font-awesome-icon icon="arrow-right"/></button>
                </fieldset>
            </form>

            <form @submit.prevent="check" v-if="logged" class="justify-content-center login" >
                <fieldset>
                    <div class="input">
                        <label class="form-check-label" for="name2">ID</label>
                        <input type="text" required :v-bind="name" v-model="name" id="name2"/>
                        <span class="tiny"><font-awesome-icon icon="user"/></span>
                    </div>

                    <button type="submit" class="submit"><font-awesome-icon icon="arrow-left"/></button>
                </fieldset>
            </form>

        </b-container>

    </div>
</template>

<script>
    import { db } from '../db';
    import 'firebase/database';
    export default {
        name: "Login",
        data() {
            return {
                user: null,
                password: null,
                name: null,
                items:[],
                error: false,
                some: 0,
                logged: false,
            }
        },
        firebase: {
            items: db.ref('users')
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            check(){
                let items = this.items;
                for(let i=0; i<items.length; i++){
                    if((this.user === items[i].id) && (this.password === items[i].password)){
                        this.name = items[i].name;
                        this.error = false;
                        this.logged = true;
                        this.$router.replace(this.$route.query.redirect || '/profile/'+ i + '');
                        return 0;
                    }
                    else{
                        this.error = true;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .warn{
        position: absolute;
        left: 35%;
        padding: 5px;
        font-size: 12px;
        color: red;
        border: none;
    }
    ::placeholder {
        color: white;
    }
    .form-check-label{
        font-size: 12px;
        margin-left: 27px;
        margin-top: 12px;
        color: #ddc5ff;
    }
    .login{
        position: absolute;
        left: 30%;
        width: 50%;
        display: table;
        background: rgba(200,200, 200, 0.15);
        border-radius: 1px;
    }
    .input{
        position: relative;
        width: 90%;
        margin: 10px auto;
        color: white;
        text-align: left;
    }
    span{
        position: absolute;
        display: block;
        color: #fff;
        left: 10px;
        top: 36px;
        font-size: 14px;
    }
    input{
        width: 100%;
        padding-left: 30px;
        display: block;
        border: none;
        border-bottom: 1px solid #EDEDED;
        border-radius: 4px;
        transition: 0.2s ease-out;
        color: #fff;
        background-color: transparent;
    }
    input:focus{
        outline: none;
    }
    .submit{
        width: 45px;
        height: 45px;
        display: block;
        margin: 0 auto -15px auto;
        background: rgba(251, 249, 251, 0.72);
        border-radius: 100%;
        border: 1px solid #2285ba;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 0 0 7px rgba(251, 249, 251, 0.22);
        transition: 0.2s ease-out;
        color: #2285ba;
    }
    #tiny .fa{
        display: block;
        position: absolute;
        font-size: 10px;
        margin-bottom: 0;
        bottom: -21px;
    }
    .submit:hover .fa-arrow-right {
        -webkit-animation-name: buzz-out;
        animation-name: buzz-out;
        -webkit-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
    }
</style>

