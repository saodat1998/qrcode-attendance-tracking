<template>
    <div>
        <b-container fluid>
            <!-- User Interface controls -->
            <b-row class="pb-3">
                <b-col md="4" class="my-1">
                    <b-form-group class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <b-col md="4" class="my-1">
                    <b-form-group label-cols-sm="4" label="Per page" class="mb-0">
                        <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="4" class="my-1">
                    <b-button @click="attendanceCheck">Refresh</b-button>
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
    const students2 = db.ref('students');
    export default {
        name: "Students",
        data() {
            return {
                // items: students,
                fields: [
                    { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                    { key: 'name', label: 'Name', sortable: true, class: 'text-center' },
                    { key: 'week_1', label: 'week-1' },
                    { key: 'week_2', label: 'week-2' },
                    { key: 'week_3', label: 'week-3' },
                    { key: 'week_4', label: 'week-4' },
                    { key: 'week_5', label: 'week-5' },
                    { key: 'week_6', label: 'week-6' },
                    { key: 'week_7', label: 'week-7' },
                    { key: 'week_8', label: 'week-8' },
                ],
                currentPage: 1,
                perPage: 8,
                totalRows: 0,
                pageOptions: [4, 8, 10],
                filter: null,
                modalInfo: { title: '', content: '' }
            }
        },
        firebase: {
            students: students2,
            qrCodeB: db.ref('qrCode'),
            qrCodeFromStudent: db.ref('qrCodeFromStudent')

        },
        mounted(){
            this.totalRows = this.students.length-1;
            this.attendanceCheck();

        },
        computed: {
            sortOptions() {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return { text: f.label, value: f.key }
                    })
            },

        },
        methods: {
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1
            },
            attendanceCheck(){
                this.totalRows = this.students.length-1;
                let students = this.students;
                for(let i=0; i<students.length; i++){
                    if(this.qrSId(students[i].id)){
                        students2.child(i).update({week_2: '1'});

                    }else{
                        students2.child(i).update({week_2: '0'});
                    }
                }
            },
            qrSId(id){
                let qrCodeFromStudent = this.qrCodeFromStudent;
                for(let i=0; i<qrCodeFromStudent.length; i++){
                    if(qrCodeFromStudent[i].studentId === id){
                        if(this.qrGiven(qrCodeFromStudent[i].qrCode)) {
                            return true;
                        }
                    }
                }
            },
            qrGiven(code){
                let qrCode = this.qrCodeB;
                for(let i=0; i<qrCode.length; i++){
                    if(qrCode[i].value === code){
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