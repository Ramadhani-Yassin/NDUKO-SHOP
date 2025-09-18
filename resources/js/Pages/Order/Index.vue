<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, router} from '@inertiajs/vue3';
import CardTable from "@/Components/Cards/CardTable.vue";
import TableData from "@/Components/TableData.vue";
import Button from "@/Components/Button.vue";
import ExportModal from "@/Components/ExportModal.vue";
import InputError from "@/Components/InputError.vue";
import Modal from "@/Components/Modal.vue";
import {useForm} from '@inertiajs/vue3';
import {computed, ref} from 'vue';
import {formatDatetime, getCurrency, numberFormat, showToast, truncateString} from "@/Utils/Helper.js";
import TableHead from "@/Components/TableHead.vue";

const props = defineProps({
    filters: {
        type: Object
    },
    orders: {
        type: Object
    },
    orderPaidByTypes: {
        type: Object
    },
});

const selectedOrder = ref(null);
const showOrderItemsModal = ref(false);
const showPaymentModal = ref(false);
const showSettleModal = ref(false);
const showExportModal = ref(false);
const tableHeads = ref(["Order Number", "Customer", "Summary(" + getCurrency() + ")", "Paid", "Due", "Profit", /* "Loss", */ "Status", "Date", "Action"]);

const form = useForm({
    amount: null,
    paid_through: 'cash',
});

const paidThroughOptions = computed(() => (Array.isArray(props.orderPaidByTypes) ? props.orderPaidByTypes : []).filter(o => o.value !== 'loan'));

const viewOrderItemsModal = (order) => {
    selectedOrder.value = order;
    showOrderItemsModal.value = true;
};

const payDueOrderModal = (order) => {
    selectedOrder.value = order;
    form.amount = order.due;
    showPaymentModal.value = true;
};
const payOrderDue = () => {
    form.post(route('orders.pay', selectedOrder.value.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
    });
};

const settleOrderModal = (order) => {
    selectedOrder.value = order;
    showSettleModal.value = true;
};
const settleDuePayment = () => {
    form.post(route('orders.settle', selectedOrder.value.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            showToast();
        },
    });
};

const cancelOrder = (order) => {
    form.post(route('orders.cancel', order.id), {
        preserveScroll: true,
        onSuccess: () => {
            showToast();
        },
    });
};

const closeModal = () => {
    showOrderItemsModal.value = false;
    showPaymentModal.value = false;
    showSettleModal.value = false;
};
</script>

<template>
    <Head title="Order"/>

    <AuthenticatedLayout>
        <template #breadcrumb>
            Orders
        </template>

        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <CardTable
                    indexRoute="orders.index"
                    :paginatedData="orders"
                    :filters="{}"
                    :tableHeads="tableHeads"
                >
                    <template #cardHeader>
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl">Orders ({{orders.total}})</h4>
                            <div class="flex space-x-2">
                                <Button @click="showExportModal = true" type="gray" title="Export">
                                 <i class="fa fa-download"></i>
                                </Button>
                                <Button
                                    :href="route('carts.index')"
                                    buttonType="link"
                                >Create Order</Button>
                            </div>
                        </div>
                    </template>

                    <ExportModal
                        :show="showExportModal"
                        indexRoute="orders.index"
                        @close="showExportModal = false"
                    />

                    <tr v-for="(order, index) in orders.data" :key="order.id">
                        <TableData>
                            <strong>#{{ order.order_number }}</strong>
                        </TableData>
                        <TableData>{{ order.customer ? order.customer.name : 'Unknown' }}</TableData>
                        <TableData class="text-start">
                            <span>Sub Total: {{ order.sub_total }}</span><br>
                            <span>Tax: {{ order.tax_total }}</span><br>
                            <span>Discount: {{ order.discount_total }}</span><br>
                            <span>Total: {{ order.total }}</span><br>
                        </TableData>
                        <TableData>{{ getCurrency() }}{{ order.paid }}</TableData>
                        <TableData>
                            <span :class="order.due > 0 ? 'text-red-500 text-xl font-bold' : ''">{{ getCurrency() }}{{ order.due }}</span>
                            <br>
                            <div class="flex" v-if="order.due > 0">
                                <Button
                                    @click="payDueOrderModal(order)"
                                    title="Pay Due"
                                    class="px-2"
                                >
                                    <i class="fa fa-money-bill-wave"></i>
                                </Button>
                                <Button
                                    @click="settleOrderModal(order)"
                                    type="red"
                                    class="px-2"
                                    title="Settle"
                                >
                                    <i class="fa fa-handshake"></i>
                                </Button>
                            </div>
                        </TableData>
                        <TableData :class="order.profit > 0 ? 'text-emerald-500 font-bold' : ''">{{ getCurrency() }}{{ order.profit }}</TableData>
                        <!-- <TableData :class="order.loss > 0 ? 'text-red-500 font-bold' : ''">{{ getCurrency() }}{{ order.loss }}</TableData> -->
                        <TableData>
                            <span v-if="order.status === 'paid'" class="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200">Paid</span>
                            <span v-else-if="order.status === 'partial_paid'" class="text-xs font-semibold inline-block py-1 px-2 rounded text-amber-600 bg-amber-200">Partial Paid</span>
                            <span v-else-if="order.status === 'over_paid'" class="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200">Over Paid</span>
                            <span v-else-if="order.status === 'cancelled'" class="text-xs font-semibold inline-block py-1 px-2 rounded text-gray-600 bg-gray-200">Cancelled</span>
                            <span v-else class="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200">Unpaid</span>
                        </TableData>
                        <TableData>{{ formatDatetime(order.created_at) }}</TableData>
                        <TableData>
                            <div class="flex space-x-2">
                                <Button title="Items"><i class="fa fa-eye"></i></Button>
                                <Button v-if="order.status !== 'cancelled'" @click="cancelOrder(order)" title="Cancel Order">
                                    <i class="fa fa-ban"></i>
                                </Button>
                            </div>
                        </TableData>
                    </tr>
                </CardTable>
            </div>
        </div>

        <!-- Payment Modal -->
        <Modal
            title="Pay"
            :show="showPaymentModal"
            :formProcessing="form.processing"
            @close="closeModal"
            @submitAction="payOrderDue"
        >
            <div class="mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="flex flex-col overflow-auto">
                    <label for="amount" class="text-stone-600 text-sm font-medium">Amount</label>
                    <input
                        id="amount"
                        v-model="form.amount"
                        type="number"
                        min="0"
                        placeholder="Enter amount"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    />
                    <InputError :message="form.errors.amount"/>
                </div>
                <div class="flex flex-col overflow-auto">
                    <label for="paid_through" class="text-stone-600 text-sm font-medium">Paid Through</label>
                    <select
                        id="paid_through"
                        v-model="form.paid_through"
                        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    >
                        <option v-for="opt in paidThroughOptions" :key="opt.value" :value="opt.value">
                            {{ opt.label }}
                        </option>
                    </select>
                    <InputError :message="form.errors.paid_through"/>
                </div>
            </div>
        </Modal>

        <!-- Settle Modal -->
        <Modal
            title="Settle"
            :show="showSettleModal"
            :formProcessing="false"
            @close="closeModal"
            @submitAction="settleDuePayment"
            submitButtonText="Settle"
        >
            Are you sure you want to settle this order?
        </Modal>

        <!-- Items Modal -->
        <Modal
            title="Order Items"
            :show="showOrderItemsModal"
            :formProcessing="false"
            @close="closeModal"
            maxWidth="lg"
        >
            <div class="overflow-x-auto">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <TableHead>Product</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Buying Price</TableHead>
                            <TableHead>Selling Price</TableHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in selectedOrder?.order_items" :key="item.id">
                            <TableData>{{ item.product_json.name }}</TableData>
                            <TableData>{{ item.quantity }}</TableData>
                            <TableData>{{ item.product_json.buying_price }}</TableData>
                            <TableData>{{ item.product_json.selling_price }}</TableData>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Modal>
    </AuthenticatedLayout>
</template>
