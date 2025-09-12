<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import CardTable from "@/Components/Cards/CardTable.vue";
import TableData from "@/Components/TableData.vue";
import Button from "@/Components/Button.vue";
import InputError from "@/Components/InputError.vue";
import Modal from "@/Components/Modal.vue";

defineProps({
    filters: {
        type: Object
    },
    expenses: {
        type: Object
    },
});

import {useForm} from '@inertiajs/vue3';
import {nextTick, ref} from 'vue';
import DashboardInputGroup from "@/Components/DashboardInputGroup.vue";
import {showToast} from "@/Utils/Helper.js";

const selectedExpense = ref(null);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const nameInput = ref(null);
const tableHeads = ref(['#', "Name", "Amount", "Expense Date", "Action"]);

const form = useForm({
    name: "",
    description: "",
    amount: "",
    expense_date: "",
});

const editExpenseModal = (expense) => {
    selectedExpense.value = expense;

    form.name = expense.name;
    form.description = expense.description;
    form.amount = expense.amount;
    form.expense_date = expense.expense_date;

    showEditModal.value = true;
    nextTick(() => nameInput.value.focus());
};

const deleteExpenseModal = (expense) => {
    selectedExpense.value = expense;
    showDeleteModal.value = true;
};

const createExpense = () => {
    form.post(route('expenses.store'), {
        preserveScroll: true,
        onSuccess: (e) => {
            closeModal();
            showToast();
        },
        onError: () => nameInput.value.focus(),
    });
};

const updateExpense = () => {
    form.put(route('expenses.update', selectedExpense.value.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
        onError: () => nameInput.value.focus(),
    });
};

const deleteExpense = () => {
    form.post(route('expenses.destroy', selectedExpense.value.id), {
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
    <Head title="Expense"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Expenses
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="expenses.index"
                    :paginatedData="expenses"
                    :filters="filters"
                    :tableHeads="tableHeads"
                    :showFilters="false"
                >
                    <template #cardHeader>
                        <div class="flex items-center gap-2">
                            <h4 class="text-2xl">Expenses ({{expenses.total}})</h4>
                        </div>
                    </template>
                    <template #cardHeaderRight>
                        <div class="flex items-center gap-2">
                            <a :href="route('expenses.index', { export: 'excel' })" class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Export</a>
                            <Button @click=" showCreateModal = true">Create Expense</Button>
                        </div>
                    </template>

                    <tr v-for="(expense, index) in expenses.data" :key="expense.id">
                        <TableData>
                            {{ (expenses.current_page * expenses.per_page) - (expenses.per_page - (index + 1)) }}
                        </TableData>
                        <TableData>{{ expense.name }}</TableData>
                        <TableData>{{ expense.amount }}</TableData>
                        <TableData>{{ expense.expense_date }}</TableData>
                        <TableData>
                            <Button @click="editExpenseModal(expense)">
                                <i class="fa fa-edit"></i>
                            </Button>
                            <Button
                                @click="deleteExpenseModal(expense)"
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
            @submitAction="createExpense"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="name">Name</label>
                    <input
                        id="name"
                        ref="nameInput"
                        v-model="form.name"
                        @keyup.enter="createExpense"
                        type="text"
                        placeholder="Enter name"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.name"/>
                </div>
                <div class="flex flex-col">
                    <label for="amount">Amount</label>
                    <input
                        id="amount"
                        v-model="form.amount"
                        @keyup.enter="createExpense"
                        type="number"
                        placeholder="Enter amount"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.amount"/>
                </div>
                <div class="flex flex-col">
                    <label for="expense_date">Expense Date</label>
                    <input
                        id="expense_date"
                        v-model="form.expense_date"
                        @keyup.enter="createExpense"
                        type="date"
                        placeholder="Enter expense date"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.expense_date"/>
                </div>
            </div>
            <div class="mt-2">
                <label for="description" class="text-stone-600 text-sm font-medium">Description</label>
                <textarea
                    id="description"
                    v-model="form.description"
                    type="text"
                    rows="3"
                    placeholder="Enter description"
                    class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                ></textarea>
                <InputError :message="form.errors.description"/>
            </div>
        </Modal>

        <!--Edit data-->
        <Modal
            title="Edit"
            :show="showEditModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="updateExpense"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="name">Name</label>
                    <input
                        id="name"
                        ref="nameInput"
                        v-model="form.name"
                        @keyup.enter="updateExpense"
                        type="text"
                        placeholder="Enter name"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.name"/>
                </div>
                <div class="flex flex-col">
                    <label for="amount">Amount</label>
                    <input
                        id="amount"
                        v-model="form.amount"
                        @keyup.enter="updateExpense"
                        type="number"
                        placeholder="Enter amount"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.amount"/>
                </div>
                <div class="flex flex-col">
                    <label for="expense_date">Expense Date</label>
                    <input
                        id="expense_date"
                        v-model="form.expense_date"
                        @keyup.enter="updateExpense"
                        type="date"
                        placeholder="Enter expense date"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.expense_date"/>
                </div>
            </div>
            <div class="mt-2">
                <label for="description" class="text-stone-600 text-sm font-medium">Description</label>
                <textarea
                    id="description"
                    v-model="form.description"
                    type="text"
                    rows="3"
                    placeholder="Enter description"
                    class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                ></textarea>
                <InputError :message="form.errors.description"/>
            </div>
        </Modal>

        <!--Delete data-->
        <Modal
            title="Delete"
            :show="showDeleteModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="deleteExpense"
            maxWidth="sm"
            submitButtonText="Yes, delete it!"
        >
            Are you sure you want to delete this expense?
        </Modal>
    </AuthenticatedLayout>
</template>
