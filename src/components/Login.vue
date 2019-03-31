<template>
    <div>
        <b-container class="pr-5">
            <form action="/select" class=" justify-content-center login" >
                <fieldset>
                  <div class="input">
                      <label class="form-check-label" for="name">ID</label>
                        <input type="text" required v-model="user" id="name"/>
                        <span class="tiny"><font-awesome-icon icon="user"/></span>
                  </div>
                  <div class="input">
                      <label class="form-check-label" for="password">Password</label>
                    <input type="password" v-model="password" id="password"/>
                    <span class="tiny"><font-awesome-icon icon="eye"/></span>
                  </div>
                    <button type="submit" class="submit"><font-awesome-icon icon="arrow-right"/></button>
                </fieldset>
            </form>
                    </b-container>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item of items" :key="item['.key']">
                <td>{{ items.id }}</td>
                <td>{{ items.password }}</td>

            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import { db } from '../db';

    export default {
        name: "Login",
            data() {
                return {
                    user: '',
                    password: '',
                    items:[],
                }
            },
            firebase: {
                items: db.ref('users')
            },
            methods: {
                onSubmit(evt) {
                    evt.preventDefault();
                    alert(JSON.stringify(this.form));
                    // this.$router.replace(this.$route.query.redirect || '/home');
                },

            }
        }
</script>

<style scoped>
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