<template>
    <div>
        <b-container fluid>
            <!-- User Interface controls -->
            <b-row>
                <b-col md="6" class="my-1">
                    <b-form-group class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <b-col md="6" class="my-1">
                    <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
                        <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Main table element -->
            <b-table
                    show-empty
                    stacked="md"
                    bordered
                    thead-tr-class="myThead"
                    :items="students"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    @filtered="onFiltered"
            >
            </b-table>
            <b-row>
                <b-col md="6" class="my-1">
                    <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            class="my-0"
                    ></b-pagination>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import { db } from '../db';
    import 'firebase/database';
    // const students = db.ref('students');
    // const qrCode = db.ref('qrCode');
    // const qrCodeFromStudent = db.ref('qrCodeFromStudent');
    export default {
        name: "Students",
        data() {
            return {
                // items: students,
                fields: [
                    { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                    { key: 'name', label: 'Name', sortable: true, class: 'text-center' },
                    { key: 'week-1', label: 'week-1' },
                    { key: 'week-2', label: 'week-2' },
                    { key: 'week-3', label: 'week-3' },
                    { key: 'week-4', label: 'week-4' },
                    { key: 'week-5', label: 'week-5' },
                    { key: 'week-6', label: 'week-6' },
                    { key: 'week-7', label: 'week-7' },
                    { key: 'week-8', label: 'week-8' },
                ],
                currentPage: 1,
                perPage: 8,
                totalRows: 0,
                pageOptions: [8, 14, 35],
                filter: null,
                modalInfo: { title: '', content: '' }
            }
        },
        firebase: {
            students: db.ref('students'),
            qrCodeB: db.ref('qrCode'),
            qrCodeFromStudent: db.ref('qrCodeFromStudent')

        },
        mounted(){
            this.totalRows = this.students.length;
            this.attendanceCheck();
        },
        watch:{

        },
        computed: {
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return { text: f.label, value: f.key }
                    })
            }
        },
        methods: {
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1
            },
            attendanceCheck(){
                console.log("inside");
                let students = this.students;
                console.log(students);
                for(let i=0; i<students.length; i++){
                    console.log(students[i].id);
                    if(this.qrSId(students[i].id)){
                        console.log("ura1")
                    }
                }
            },
            qrSId(id){
                let qrCodeFromStudent = this.qrCodeFromStudent;
                for(let i=0; i<qrCodeFromStudent.length; i++){
                    if(qrCodeFromStudent[i].studentId === id){
                        console.log("ura2");
                        if(this.qrGiven(qrCodeFromStudent[i].qrCode)) {
                            console.log("ura3");
                            return true;
                        }
                    }
                }
            },
            qrGiven(code){
                let qrCode = this.qrCodeB;
                console.log("ura4");
                for(let i=0; i<qrCode.length; i++){
                    console.log("ura5");
                    if(qrCode.value === code){
                        return true;
                    }
                }
            }

        }
    }
</script>

<style>
    .myThead{
        font-size: 12px!important;
    }
</style>