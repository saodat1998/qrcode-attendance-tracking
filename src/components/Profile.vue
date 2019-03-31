<template>
    <b-row class="pt-5">
        <b-col md="6">
            <table class="border">
                <tr>
                    <td><font-awesome-icon class="userIcon" icon="user"/></td>
                    <td>{{id}}</td>
                </tr>
            </table>

        </b-col>
    </b-row>

</template>

<script>
    export default {
        name: "Profile",
        data(){
            return {
                id: this.$route.params.id,
            }
        },
        props:{
            user:{
                id: String,
            }
        },
    }
</script>

<style scoped>
    .svg-inline--fa.fa-w-14{
        width: 9rem;
    }
    .svg-inline--fa{
        height: 9em;
        color: #14599e;
    }
</style>
