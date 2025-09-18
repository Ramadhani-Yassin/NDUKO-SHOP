<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import CardTable from "@/Components/Cards/CardTable.vue";
import TableData from "@/Components/TableData.vue";
import Button from "@/Components/Button.vue";
import InputError from "@/Components/InputError.vue";
import Modal from "@/Components/Modal.vue";
import ExportModal from "@/Components/ExportModal.vue";
import {useForm} from '@inertiajs/vue3';
import {nextTick, ref} from 'vue';
import DashboardInputGroup from "@/Components/DashboardInputGroup.vue";
import {showToast} from "@/Utils/Helper.js";

defineProps({
    filters: {
        type: Object
    },
    employees: {
        type: Object
    },
});

const selectedEmployee = ref(null);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const showExportModal = ref(false);
const nameInput = ref(null);
const tableHeads = ref(['#', "Name", "Designation", "Email", "Phone", "Salary", "Joining Date", "Action"]);

const form = useForm({
    name: null,
    email: null,
    phone: null,
    designation: null,
    address: null,
    salary: null,
    nid: null,
    joining_date: null,
    photo: null,
});

const createEmployeeModal = () => {
    showCreateModal.value = true;

    nextTick(() => nameInput.value.focus());
};

const editEmployeeModal = (employee) => {
    selectedEmployee.value = employee;

    form.name = employee.name;
    form.email = employee.email;
    form.phone = employee.phone;
    form.designation = employee.designation;
    form.address = employee.address;
    form.salary = employee.salary;
    form.nid = employee.nid;
    form.joining_date = employee.joining_date;
    form.photo = null;

    showEditModal.value = true;

    nextTick(() => nameInput.value.focus());
};

const deleteEmployeeModal = (employee) => {
    selectedEmployee.value = employee;
    showDeleteModal.value = true;
};

const createEmployee = () => {
    form.post(route('employees.store'), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
        onError: () => nameInput.value.focus(),
    });
};

const updateEmployee = () => {
    form.transform((data) => ({
        ...data,
        _method: "put"
    }))
        .post(route('employees.update', selectedEmployee.value.id), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                showToast();
            },
            onError: () => nameInput.value.focus(),
        });
};

const deleteEmployee = () => {
    form.post(route('employees.destroy', selectedEmployee.value.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
    });
};

const closeModal = () => {
    showCreateModal.value = false;
    showEditModal.value = false;
    showDeleteModal.value = false;
    form.reset();
};
</script>

<template>
    <Head title="Employee"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Employees
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="employees.index"
                    :paginatedData="employees"
                    :filters="{}"
                    :tableHeads="tableHeads"
                >
                    <template #cardHeader>
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl">Employees ({{employees.total}})</h4>
                            <div class="flex space-x-2">
                                <Button @click="showExportModal = true" type="gray" title="Export">
                                 <i class="fa fa-download"></i>
                                </Button>
                            <Button @click="createEmployeeModal">Create Employee</Button>
                            </div>
                        </div>
                    </template>

                    <ExportModal
                        :show="showExportModal"
                        indexRoute="employees.index"
                        @close="showExportModal = false"
                    />

                    <tr v-for="(employee, index) in employees.data" :key="employee.id">
                        <TableData>
                            {{ (employees.current_page * employees.per_page) - (employees.per_page - (index + 1)) }}
                        </TableData>
                        <TableData class="text-left flex items-center">
                            <!-- Photo not necessary; commented out. -->
                            <!--
                            <img
                                :src="employee.photo"
                                class="h-12 w-12 bg-white rounded-full border"
                                alt="Inventory management system"
                            />
                            -->
                            <span class="ml-3 font-bold text-blueGray-600">{{ employee.name }}</span>
                        </TableData>
                        <TableData>{{ employee.designation }}</TableData>
                        <TableData>{{ employee.email }}</TableData>
                        <TableData>{{ employee.phone }}</TableData>
                        <TableData>{{ employee.salary }}</TableData>
                        <TableData>{{ employee.joining_date }}</TableData>
                        <TableData>
                            <Button @click="editEmployeeModal(employee)">
                                <i class="fa fa-edit"></i>
                            </Button>
                            <Button
                                @click="deleteEmployeeModal(employee)"
                                type="red"
                            >
                                <i class="fa fa-trash-alt"></i>
                            </Button>
                        </TableData>
                    </tr>
                </CardTable>
            </div>
        </div>

        <!--Create data-->
        <Modal
            title="Create"
            :show="showCreateModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="createEmployee"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Name"
                        name="name"
                        v-model="form.name"
                        placeholder="Enter name"
                        :errorMessage="form.errors.name"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Email"
                        name="email"
                        v-model="form.email"
                        placeholder="Enter email"
                        :errorMessage="form.errors.email"
                        @keyupEnter="createEmployee"
                        type="email"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Phone"
                        name="phone"
                        v-model="form.phone"
                        placeholder="Enter phone"
                        :errorMessage="form.errors.phone"
                        @keyupEnter="createEmployee"
                    />
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Designation"
                        name="designation"
                        v-model="form.designation"
                        placeholder="Enter designation"
                        :errorMessage="form.errors.designation"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="NID"
                        name="nid"
                        v-model="form.nid"
                        placeholder="Enter NID"
                        :errorMessage="form.errors.nid"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Salary"
                        name="salary"
                        v-model="form.salary"
                        placeholder="Enter salary"
                        :errorMessage="form.errors.salary"
                        @keyupEnter="createEmployee"
                        type="number"
                    />
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Joining Date"
                        name="joining_date"
                        v-model="form.joining_date"
                        placeholder="Enter joining date"
                        :errorMessage="form.errors.joining_date"
                        @keyupEnter="createEmployee"
                        type="date"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Address"
                        name="address"
                        v-model="form.address"
                        placeholder="Enter address"
                        :errorMessage="form.errors.address"
                        @keyupEnter="createEmployee"
                    />
                </div>
                
                <!--
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Photo"
                        name="photo"
                        v-model="form.photo"
                        placeholder="Upload photo"
                        :errorMessage="form.errors.photo"
                        @keyupEnter="createEmployee"
                        type="file"
                    />
                </div>
                -->

            </div>
        </Modal>

        <!--Edit data-->
        <Modal
            title="Edit"
            :show="showEditModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="updateEmployee"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Name"
                        name="name"
                        v-model="form.name"
                        placeholder="Enter name"
                        :errorMessage="form.errors.name"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Email"
                        name="email"
                        v-model="form.email"
                        placeholder="Enter email"
                        :errorMessage="form.errors.email"
                        @keyupEnter="createEmployee"
                        type="email"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Phone"
                        name="phone"
                        v-model="form.phone"
                        placeholder="Enter phone"
                        :errorMessage="form.errors.phone"
                        @keyupEnter="createEmployee"
                    />
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Designation"
                        name="designation"
                        v-model="form.designation"
                        placeholder="Enter designation"
                        :errorMessage="form.errors.designation"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="NID"
                        name="nid"
                        v-model="form.nid"
                        placeholder="Enter NID"
                        :errorMessage="form.errors.nid"
                        @keyupEnter="createEmployee"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Salary"
                        name="salary"
                        v-model="form.salary"
                        placeholder="Enter salary"
                        :errorMessage="form.errors.salary"
                        @keyupEnter="createEmployee"
                        type="number"
                    />
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Joining Date"
                        name="joining_date"
                        v-model="form.joining_date"
                        placeholder="Enter joining date"
                        :errorMessage="form.errors.joining_date"
                        @keyupEnter="createEmployee"
                        type="date"
                    />
                </div>
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Address"
                        name="address"
                        v-model="form.address"
                        placeholder="Enter address"
                        :errorMessage="form.errors.address"
                        @keyupEnter="createEmployee"
                    />
                </div>

                
                <!--
                <div class="flex flex-col">
                    <DashboardInputGroup
                        label="Photo"
                        name="photo"
                        v-model="form.photo"
                        placeholder="Upload photo"
                        :errorMessage="form.errors.photo"
                        @keyupEnter="createEmployee"
                        type="file"
                    />
                </div>
                -->

            </div>
        </Modal>

        <!--Delete data-->
        <Modal
            title="Delete"
            :show="showDeleteModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="deleteEmployee"
            maxWidth="sm"
            submitButtonText="Yes, delete it!"
        >
            Are you sure you want to delete this employee?
        </Modal>
    </AuthenticatedLayout>
</template>
