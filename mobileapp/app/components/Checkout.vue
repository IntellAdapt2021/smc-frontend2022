<template>
<StackLayout>
        <Label dock="left" textWrap="true" height="40" 
        backgroundImage="~/assets/images/birds.jpg">
            <FormattedString>
                <Span color="#ffffff" text="Cart Checkout" fontWeight="bold" fontSize="25" />
            </FormattedString>
        </Label>
           
        <ListView marginLeft="4" for="checkoutitem in checkoutitems" borderRadius="12">
           <v-template>
               <Span :text="checkoutitem.name"/>
               <!--<CheckoutItem :item="checkoutitem"/>-->
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
//import CheckoutItem from "@/components/CheckoutItem";
export default {
    components: {
        //CheckoutItem
    },
    computed: {
        checkoutitems() {
            return [
                {name: "Binod"}
            ]
        }
    }
};
</script>
