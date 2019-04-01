<template>
    <b-row class="pt-5">
        <b-col md="8">
            <table class="border">
                <thead>
                <th>Profile</th>
                <th>Info</th>

                </thead>
                <tr>
                    <td><font-awesome-icon class="userIcon" icon="user"/></td>
                    <td style="text-align: left">
                        <p class="pt-3">ID: {{user}}<p>
                        <hr>
                        <p>Name: {{name}}<p>
                        <hr>
                        <p>Subjects:
                            <span
                                v-for="(value, key) in courses"
                                :key="key"
                                class="subjects"
                                >
                                     {{value}}
                                 <br>
                            </span>
                        </p>
                    </td>
               </tr>
            </table>
        <Select></Select>
        </b-col>

    </b-row>

</template>

<script>
    import { db } from '../db';
    import 'firebase/database';
    import Select from "./Select";

    export default {
        name: "Profile",
        components: {Select},
        data() {
            return {
                id: this.$route.params.id.toString(),
                name: null,
                courses: [],
                user: null,
               }
        },
        firebase: {
            items: db.ref('users')
        },
        methods: {
            check() {
                this.items = this.items[this.id];
                this.name = this.items.name;
                this.user = this.items.id;
                this.courses = this.items.courses;

            }
        },
        mounted(){
            this.check();
        }
    }
</script>

<style scoped>
    .svg-inline--fa.fa-w-14{
        width: 6rem;
    }
    .svg-inline--fa{
        height: 9em;
        color: #14599e;
    }
    table, tr, td{
        border-top: 1px solid #6f74e9;
        padding-right: 20px;
        padding-left: 20px;

        font-size: 18px;
    }
    .subjects{
        margin-left: 90px;
        text-align: center;
        border-bottom: 1px solid #7b67df;
        width: 100px;
        display: block
    }
</style>
