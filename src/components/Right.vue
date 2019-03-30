<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options" class="mb-3 mySelect">
                        <template slot="first">
                            <option :value="null" disabled>Subject</option>
                        </template>
                    </b-form-select>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options" class="mb-3 mySelect">
                        <template slot="first">
                            <option :value="null" disabled>Course</option>
                        </template>
                    </b-form-select>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options" class="mb-3 mySelect">
                        <template slot="first">
                            <option :value="null" disabled>Section</option>
                        </template>
                    </b-form-select>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options" class="mb-3 mySelect">
                        <template slot="first">
                            <option :value="null" disabled>Group</option>
                        </template>
                    </b-form-select>
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Right",
        data() {
            return {
                selected: null,
                options: [
                    { value: 'SP', text: 'System Programming' },
                    { value: 'CA', text: 'Computer architecture' },
                    { value: 'OS', text: 'Operating Systems' }
                ]
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
