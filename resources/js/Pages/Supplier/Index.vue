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
import {showToast} from "@/Utils/Helper.js";

defineProps({
    filters: {
        type: Object
    },
    suppliers: {
        type: Object
    },
});

const selectedSupplier = ref(null);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const showExportModal = ref(false);
const nameInput = ref(null);
const tableHeads = ref(['#', "Name", "Email", "Phone", "Shop Name", "Action"]);

const form = useForm({
    name: null,
    email: null,
    phone: null,
    shop_name: null,
    address: null,
    photo: null,
});

const createSupplierModal = () => {
    showCreateModal.value = true;

    nextTick(() => nameInput.value.focus());
};

const editSupplierModal = (supplier) => {
    selectedSupplier.value = supplier;

    form.name = supplier.name;
    form.email = supplier.email;
    form.phone = supplier.phone;
    form.shop_name = supplier.shop_name;
    form.address = supplier.address;
    form.photo = null;

    showEditModal.value = true;

    nextTick(() => nameInput.value.focus());
};

const deleteSupplierModal = (supplier) => {
    selectedSupplier.value = supplier;
    showDeleteModal.value = true;
};

const createSupplier = () => {
    form.post(route('suppliers.store'), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
        onError: () => nameInput.value.focus(),
    });
};

const updateSupplier = () => {
    form.transform((data) => ({
        ...data,
        _method: "put"
    }))
        .post(route('suppliers.update', selectedSupplier.value.id), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                showToast();
            },
            onError: () => nameInput.value.focus(),
        });
};

const deleteSupplier = () => {
    form.post(route('suppliers.destroy', selectedSupplier.value.id), {
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
    <Head title="Supplier"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Suppliers
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="suppliers.index"
                    :paginatedData="suppliers"
                    :filters="{}"
                    :tableHeads="tableHeads"
                >
                    <template #cardHeader>
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl">Suppliers ({{suppliers.total}})</h4>
                            <div class="flex space-x-2">
                                <Button @click="showExportModal = true" type="gray" title="Export">
                                 <i class="fa fa-download"></i>
                                </Button>
                            <Button @click="createSupplierModal">Create Supplier</Button>
                            </div>
                        </div>
                    </template>

                    <ExportModal
                        :show="showExportModal"
                        indexRoute="suppliers.index"
                        @close="showExportModal = false"
                    />

                    <tr v-for="(supplier, index) in suppliers.data" :key="supplier.id">
                        <TableData>
                            {{ (suppliers.current_page * suppliers.per_page) - (suppliers.per_page - (index + 1)) }}
                        </TableData>
                        <TableData class="text-left flex items-center">
                            <!-- Photo not necessary; commented out. -->
                            <!--
                            <img
                                :src="supplier.photo"
                                class="h-12 w-12 bg-white rounded-full border"
                                alt="Inventory management system"
                            />
                            -->
                            <span class="ml-3 font-bold text-blueGray-600">{{ supplier.name }}</span>
                        </TableData>
                        <TableData>{{ supplier.email }}</TableData>
                        <TableData>{{ supplier.phone }}</TableData>
                        <TableData>{{ supplier.shop_name }}</TableData>
                        <TableData>
                            <Button @click="editSupplierModal(supplier)">
                                <i class="fa fa-edit"></i>
                            </Button>
                            <Button
                                @click="deleteSupplierModal(supplier)"
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
            @submitAction="createSupplier"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="name" class="text-stone-600 text-sm font-medium">Name</label>
                    <input id="name" ref="nameInput" v-model="form.name" type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.name"/>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-stone-600 text-sm font-medium">Email</label>
                    <input id="email" v-model="form.email" type="email" placeholder="Enter email" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.email"/>
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-stone-600 text-sm font-medium">Phone</label>
                    <input id="phone" v-model="form.phone" type="text" placeholder="Enter phone" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.phone"/>
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="shop_name" class="text-stone-600 text-sm font-medium">Shop Name</label>
                    <input id="shop_name" v-model="form.shop_name" type="text" placeholder="Enter shop name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.shop_name"/>
                </div>
                <div class="flex flex-col">
                    <label for="address" class="text-stone-600 text-sm font-medium">Address</label>
                    <input id="address" v-model="form.address" type="text" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.address"/>
                </div>
                <!--
                <div class="flex flex-col">
                    <label for="photo" class="text-stone-600 text-sm font-medium">Photo</label>
                    <input id="photo" name="photo" type="file" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.photo"/>
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
            @submitAction="updateSupplier"
        >
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="name" class="text-stone-600 text-sm font-medium">Name</label>
                    <input id="name" ref="nameInput" v-model="form.name" type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.name"/>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-stone-600 text-sm font-medium">Email</label>
                    <input id="email" v-model="form.email" type="email" placeholder="Enter email" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.email"/>
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-stone-600 text-sm font-medium">Phone</label>
                    <input id="phone" v-model="form.phone" type="text" placeholder="Enter phone" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.phone"/>
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col">
                    <label for="shop_name" class="text-stone-600 text-sm font-medium">Shop Name</label>
                    <input id="shop_name" v-model="form.shop_name" type="text" placeholder="Enter shop name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.shop_name"/>
                </div>
                <div class="flex flex-col">
                    <label for="address" class="text-stone-600 text-sm font-medium">Address</label>
                    <input id="address" v-model="form.address" type="text" placeholder="Enter address" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.address"/>
                </div>
                <div class="flex flex-col">
                    <label for="photo" class="text-stone-600 text-sm font-medium">Photo</label>
                    <input id="photo" name="photo" type="file" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"/>
                    <InputError :message="form.errors.photo"/>
                </div>
            </div>
        </Modal>

        <!--Delete data-->
        <Modal
            title="Delete"
            :show="showDeleteModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="deleteSupplier"
            maxWidth="sm"
            submitButtonText="Yes, delete it!"
        >
            Are you sure you want to delete this supplier?
        </Modal>
    </AuthenticatedLayout>
</template>
