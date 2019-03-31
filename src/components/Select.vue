<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col md="6">
            <b-row class="pt-5">
                <b-col md="4">Course</b-col>
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
                <b-col md="4">Group</b-col>
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
                <b-col md="3">
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
        name: "Right",

        data() {
            return {
                details: details,
                optionsC: [
                    { value: '1', text: 'Freshman' },
                    { value: '2', text: 'Sophomore' },
                    { value: '3', text: 'Junior' },
                    { value: '4', text: 'Seior' }
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
                    { value: '17-1', text: 'CSE-17-1' },
                    { value: '17-2', text: 'CSE-17-2' },
                    { value: '17-3', text: 'CSE-17-3' },
                    { value: '17-4', text: 'CSE-17-4' }
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
