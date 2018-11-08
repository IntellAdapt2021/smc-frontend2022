<template>
<StackLayout>        
        <ListView height="100%" marginLeft="4" for="checkoutitem in checkoutitems" borderRadius="12">
           <v-template>
               <CheckoutItem :store="store" :item="checkoutitem"/>
            </v-template>
        </ListView>

</StackLayout>
</template>


<style scoped>
.reloadbtn {
  background-color: dodgerblue;
}
</style>

<script>
import CheckoutItem from "@/components/CheckoutItem";
export default {
    props: ["store"],
    components: {
        CheckoutItem
    },
    computed: {
        checkoutitems() {
            return this.store.state.cartItems
        }
    }
};
</script>
