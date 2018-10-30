<template>
<StackLayout>
        <Label dock="left" textWrap="true" height="40" 
        backgroundImage="~/assets/images/birds.jpg">
            <FormattedString>
                <Span color="#ffffff" text="Energy Producers" fontWeight="bold" fontSize="25" />
            </FormattedString>

        </Label>
        <DockLayout stretchLastChild="false" backgroundColor="#ffffff">
            <Image dock="right" src="~/assets/images/cart.jpg" stretch="none"/>
        </DockLayout>
        <Button text="Reload" @tap="fetchProducers" class="reloadbtn btn btn-info btn-active" />
    
        <FlexboxLayout>
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
        <ListView marginLeft="4" for="user in regusers" borderRadius="12">
            <v-template>
                <Producer :user="user"/>
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
import ProducerService from '@/services/ProducerService';
import Producer from '@/components/Producer';

const getProducers = function (app) {
    return app.producerService.getProducers().then(producers => {
        console.log(JSON.stringify(producers))
        app.$store.commit('setregisteredusers', producers.data._embedded.registeredusers);
    }).catch(error => console.log(error));
}
export default {
    components: {
        Producer
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
        }
    },
    mounted() {
        this.producerService = new ProducerService();
        getProducers(this).then( () => {} );
    },
    methods: {
        fetchProducers(args) {
            const button = args.object;
            getProducers(this).then( () => {
                button.text = `${this.usercount} Producers found | Reload`;
            });
        }
    }
};
</script>
