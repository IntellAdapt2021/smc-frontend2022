<template>
    <StackLayout>
        <Label width="90%" flexGrow="1" paddingTop="20" paddingBottom="5">
            <FormattedString>
                <Span text="Buying from : "/>
                <Span :text="user.name" fontWeight="bold" />
            </FormattedString>
        </Label>
        <Label width="90%" flexGrow="1" paddingTop="5" paddingBottom="20">
            <FormattedString>
                <Span text="Available Tokens : "/>
                <Span :text="user.tokensAvailable" fontWeight="bold" />
            </FormattedString>
        </Label>
        <Label width="90%" flexGrow="1" paddingTop="20" paddingBottom="5">
            <FormattedString>
                <Span text="Cost $: "/>
                <Span :text="cost"/>
            </FormattedString>
        </Label>
        <TextField width="90%" :text="units + 'units'" 
                hint="Energy Kwh to buy..." 
                v-model="units"
                borderColor="#ccccce"
                borderWidth="3"
                borderRadius="7"
                margin="4"
                flexGrow="1"
        />
        <Button width="90%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                @tap="addToCart"
                text="Add To Cart" />  
        <Button width="90%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                @tap="backToProducerList"
                text="Proceed to Checkout" />  
        <Button width="90%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                @tap="backToProducerList"
                text="Keep shopping" />  
        <Button width="90%" flexGrow="1" 
                borderWidth="1"
                height="40"
                class="reloadbtn btn btn-info"
                @tap="backToProducerList" 
                text="Close" />  

    </StackLayout>
</template>

<script>
export default {
    props: ["store"],
    data() {
        return {
            user: this.$store.state.buyuser,
            pricePerKwh: this.$store.state.buyuser.pricePerKwh,
            units: undefined
        }
    },
    mounted() {
        this.store.commit('settitletext', "Purchase Energy Units");
    },
    computed: {
        cost() {
            return (this.units || 0 ) * this.pricePerKwh
        }
    },
    methods : {
        backToProducerList() {
            this.store.commit('setbuymode', false);
            this.store.commit('setbuyuser', {});
        },
        addToCart() {
            let cartItem = {
                cost: this.cost,
                producer: this.user
            }
            this.store.commit('addcartitem', cartItem)
        }
    }
    
}
</script>

<style scoped>
.reloadbtn {
  background-color: dodgerblue;
}
</style>
