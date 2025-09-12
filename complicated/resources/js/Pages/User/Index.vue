<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import CardTable from "@/Components/Cards/CardTable.vue";
import TableData from "@/Components/TableData.vue";
import {ref} from 'vue';
import {truncateString} from "@/Utils/Helper.js";

defineProps({
    filters: {
        type: Object
    },
    users: {
        type: Object
    },
});

const tableHeads = ref(['#', "Name", "Email", "Email Verified At"]);
</script>

<template>
    <Head title="User"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Users
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="users.index"
                    :paginatedData="users"
                    :filters="filters"
                    :tableHeads="tableHeads"
                    :showFilters="false"
                >
                    <template #cardHeader>
                        <div class="flex items-center gap-2">
                            <h4 class="text-2xl">Users ({{users.total}})</h4>
                        </div>
                    </template>
                    <template #cardHeaderRight>
                        <div class="flex items-center gap-2">
                            <a :href="route('users.index', { export: 'excel' })" class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Export</a>
                        </div>
                    </template>

                    <tr v-for="(user, index) in users.data" :key="user.id">
                        <TableData>
                            {{ (users.current_page * users.per_page) - (users.per_page - (index + 1)) }}
                        </TableData>
                        <TableData class="text-left flex items-center" :title="user.name">
                            <span class="ml-3 font-bold text-blueGray-600">{{ truncateString(user.name, 20) }}</span>
                        </TableData>
                        <TableData>{{ user.email }}</TableData>
                        <TableData>
                            <span v-if="user.email_verfied_at" class="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200">Verified</span>
                            <span v-else class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">Unverified</span>
                        </TableData>
                    </tr>
                </CardTable>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
