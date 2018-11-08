<template>
    <StackLayout>

        <Label flexGrow="1" text="Energy Units"
              backgroundColor="#41b883"
              fontSize="20" fontWeight="30" marginBottom="5" marginTop="5"/>

        <Label flexGrow="1" :text="'Cost: ' + item.cost" 
              fontSize="13" fontWeight="20" marginBottom="5" marginTop="5"/>

        <Label flexGrow="1" :text="'Seller: ' + item.producer.name" 
              fontSize="13" fontWeight="20" marginBottom="5" marginTop="5"/>

    </StackLayout>
           
</template>

<script>
export default {
    props: ["store", "item"],
    mounted() {
        this.store.commit('settitletext', "Checkout Energy Purchase")
    },
    data() {
        return {
           
        }
    }
}
</script>

<style>

</style>
