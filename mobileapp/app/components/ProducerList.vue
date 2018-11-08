<template>
<StackLayout>
        <Label dock="left" textWrap="true" height="40" 
        backgroundImage="~/assets/images/birds.jpg">
            <FormattedString>
                <Span color="#ffffff" :text="titleText" fontWeight="bold" fontSize="25" />
            </FormattedString>
        </Label>
        
        <DockLayout v-if="isListMode" stretchLastChild="false" backgroundColor="#ffffff">
            <Image dock="right" src="~/assets/images/cart.jpg" stretch="none"/>
        </DockLayout>
        <Button text="Show/Update Producers" @tap="fetchProducers" class="reloadbtn btn btn-info btn-active" />
        <Button v-if="!isCheckoutMode"
                :text="'Go to Cart (' + cartSizeText + ')'" class="reloadbtn btn btn-info btn-active"  
                fontSize="12" @tap="gotoCart" />

        <FlexboxLayout v-if="isListMode">
            <!-- Shows the list item label in the default color and style. -->
            <Label flexGrow="1" text="Producer" 
              fontSize="11" fontWeight="20" marginBottom="5" marginTop="5"/>
            <Label flexGrow="1" width="30" fontSize="11"
              fontWeight="20" text="Address"/>
            <Label flexGrow="1" width="30" fontSize="11"
             fontWeight="20" text="Tokens Avail"/>
            <Label flexGrow="1" width="20" fontSize="11"
              fontWeight="20" text="Cost/KWh"/>
        </FlexboxLayout>
                
        <ListView v-if="isListMode" marginLeft="4" for="user in regusers" borderRadius="12">
            <v-template>
                <Producer :user="user" :store="$store"/>
            </v-template>
        </ListView>

        <FlexBoxLayout v-if="isBuyMode">
            <buy-page :store="$store"/>
        </FlexBoxLayout>

        <FlexBoxLayout v-if="isCheckoutMode">
            <checkout-page :store="$store"/>
        </FlexBoxLayout>

</StackLayout>
</template>


<style scoped>
.reloadbtn {
  background-color: rgb(14, 34, 5);
  color: rgb(236, 240, 234);
  font-weight: bold;
}
</style>

<script>
import ProducerService from '@/services/ProducerService';
import Producer from '@/components/Producer';

const getProducers = function (app) {
    return app.producerService.getProducers().then(producers => {
        console.log(JSON.stringify(producers))
        app.$store.commit('setregisteredusers', producers.data._embedded.registeredusers);
    }).catch(error => console.log(error));
}

import CheckoutPage from "@/components/Checkout"
import BuyPage from "@/components/BuyPage"
export default {
    components: {
        Producer,
        CheckoutPage,
        BuyPage
    },
    data() {
        return {
        }
    },
    computed: {
        usercount() {
            return this.$store.state.registeredusers.length
        },
        regusers() {
            console.log("Store state is " + JSON.stringify(this.$store.state));
            return this.$store.state.registeredusers
        },
        isListMode() {
            return !this.$store.state.checkoutmode && !this.$store.state.buymode
        },
        isCheckoutMode() {
            return this.$store.state.checkoutmode
        },
        isBuyMode() {
            return this.$store.state.buymode
        },
        buyUser() {
            return this.$store.state.buyuser
        },
        cartSizeText() {
            return this.$store.state.cartItems.length
        },
        titleText() {
            return this.$store.state.titleText
        }
    },
    mounted() {
        this.producerService = new ProducerService();
        getProducers(this).then( () => {} );
        this.$store.commit('settitletext', "Find Energy Producers");
    },
    updated() {
        //this.$store.commit('settitletext', "Find Energy Producers");
    },
    methods: {
        fetchProducers(args) {
            const button = args.object;
            let that = this;
            getProducers(this).then( () => {
                button.text = `${this.usercount} Producers found | Reload`;
                that.$store.commit('setcheckoutmode', false);
                that.$store.commit('setbuymode', false);
                this.$store.commit('settitletext', "Find Energy Producers");
            });
        },
        gotoCart() {
            this.$store.commit('setcheckoutmode', true);
            this.$store.commit('setbuymode', false);
        }
    }
};
</script>
