<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import CardTable from "@/Components/Cards/CardTable.vue";
import TableData from "@/Components/TableData.vue";
import Button from "@/Components/Button.vue";
import ExportModal from "@/Components/ExportModal.vue";
import {ref} from 'vue';
import {formatDatetime, getCurrency} from "@/Utils/Helper.js";

defineProps({
    filters: {
        type: Object
    },
    transactions: {
        type: Object
    },
});

const tableHeads = ref(['#', "Transaction Number", "Order Number", "Amount", "Paid Through", "Created At"]);
const showExportModal = ref(false);
</script>

<template>
    <Head title="Transaction"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Transactions
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="transactions.index"
                    :paginatedData="transactions"
                    :filters="{}"
                    :tableHeads="tableHeads"
                >
                    <template #cardHeader>
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl">Transactions ({{transactions.total}})</h4>
                            <Button @click="showExportModal = true" type="gray">Export</Button>
                        </div>
                    </template>

                    <ExportModal
                        :show="showExportModal"
                        indexRoute="transactions.index"
                        @close="showExportModal = false"
                    />

                    <tr v-for="(transaction, index) in transactions.data" :key="transaction.id">
                        <TableData>
                            {{ (transactions.current_page * transactions.per_page) - (transactions.per_page - (index + 1)) }}
                        </TableData>
                        <TableData>{{ transaction.transaction_number }}</TableData>
                        <TableData>{{ transaction.order.order_number }}</TableData>
                        <TableData>{{ getCurrency() }}{{ transaction.amount }}</TableData>
                        <TableData>{{ transaction.paid_through }}</TableData>
                        <TableData>{{ formatDatetime(transaction.created_at) }}</TableData>
                    </tr>
                </CardTable>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
