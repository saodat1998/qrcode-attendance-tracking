<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col md="8" style="text-align: left">
            <b-row class="pt-5">
                <b-col md="4">ClassType</b-col>
                <b-col>
                    <b-form-select
                            v-model="selected[0]"
                            :options="optionsC"
                            class="mb-3 mySelect">
                    </b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4">Subject</b-col>
                <b-col>
                    <b-form-select
                            v-model="selected[1]"
                            :options="options"
                            class="mb-3 mySelect">
                    </b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4">Section</b-col>
                <b-col>
                    <b-form-select
                            v-model="selected[2]"
                            :options="optionsS"
                            class="mb-3 mySelect">
                    </b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4">Week</b-col>
                <b-col>
                    <b-form-select
                            v-model="selected[3]"
                            :options="optionsG"
                            class="mb-3 mySelect">
                    </b-form-select>

                </b-col>
            </b-row>
                </b-col>
            <b-col md="4">
                <div class="pt-5">
                    <b-list-group>
                        <b-list-group-item
                                href="#"
                                v-for="(value, key) in selected"
                                :key="key"
                        >
                            {{value}}
                        </b-list-group-item>
                    </b-list-group>
                </div>
            </b-col>
            </b-row>
            <b-row>
                <b-col md="4">
                    <b-button @click="sendSelected">create QRcode</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    const details = [
    {
        subject: "",
    }
    ];


    export default {
        name: "Select",

        data() {
            return {
                details: details,
                optionsC: [
                    { value: 'Lec', text: 'Lecture' },
                    { value: 'Lab', text: 'Lab' },
                    { value: 'Tt', text: 'Tutorial' },
                ],
                selected: [],
                options: [
                    { value: 'SP', text: 'System Programming' },
                    { value: 'CA', text: 'Computer architecture' },
                    { value: 'OS', text: 'Operating Systems' }
                ],
                optionsS: [
                    { value: '001', text: '001' },
                    { value: '002', text: '002' },
                    { value: '003', text: '003' },
                    { value: '004', text: '004' }
                ],
                optionsG: [
                    { value: '1', text: 'week-1' },
                    { value: '2', text: 'week-2' },
                    { value: '3', text: 'week-3' },
                    { value: '4', text: 'week-4' },
                    { value: '5', text: 'week-5' },
                    { value: '6', text: 'week-6' },
                    { value: '7', text: 'week-7' },
                    { value: '8', text: 'week-8' }
                ],
                fields: [
                    {key: 'subject', label: "Short information"},

                    ],
            }
        },
        methods:{
            sendSelected(){
                this.$router.replace(this.$route.query.redirect || '/qrCode');
            }
        }
    }
</script>
<style scoped>
    .mySelect{
        background-color: rgba(204, 212, 247, 0.25);
        border-color: rgba(188, 193, 231, 0.67);
        color: #29008c;
    }
</style>
