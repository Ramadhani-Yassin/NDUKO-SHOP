<script setup>
import { ref } from 'vue';
import Modal from '@/Components/Modal.vue';
import Button from '@/Components/Button.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Export'
    },
    show: {
        type: Boolean,
        default: false,
    },
    indexRoute: {
        type: String,
        required: true,
    },
    query: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(['close']);

const close = () => emit('close');

const exportExcelHref = () => route(props.indexRoute, { ...props.query, export: 'excel' });
const exportPdfHref = () => route(props.indexRoute, { ...props.query, export: 'pdf' });
</script>

<template>
    <Modal
        :title="title"
        :show="show"
        :formProcessing="false"
        :showSubmitButton="false"
        @close="close"
    >
        <div class="space-y-4">
            <p class="text-stone-700">Choose an export format:</p>
            <div class="flex items-center space-x-3">
                <a :href="exportExcelHref()"
                   class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                    Export Excel
                </a>
                <a :href="exportPdfHref()"
                   class="active:scale-95 rounded bg-emerald-600 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                    Export PDF
                </a>
            </div>
        </div>
    </Modal>
</template> 