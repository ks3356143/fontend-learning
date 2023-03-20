<template>
    <div>
        <ShowMessageView :names="names">
            <template #default="slotProps">
                <button>{{slotProps.item}}-{{ slotProps.index }}</button>
            </template>
        </ShowMessageView>
    </div>
</template>

<script>
import ShowMessageView from './ShowNamesView.vue';

export default {
    components: { ShowMessageView },
    data() {
        return {
            names:["chen",'kobe','james','curry']
        }
    },
}
</script>

<style scoped></style>