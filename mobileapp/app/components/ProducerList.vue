<template>
<StackLayout>
        <Label textWrap="true" height="70">
            <FormattedString>
                <Span text="Energy Producers" fontWeight="bold" fontSize="25" />
            </FormattedString>
        </Label>
        <Button text="Reload" @tap="fetchProducers" class="reloadbtn btn btn-info btn-active" />
        <ListView for="user in regusers" borderRadius="12">
            <v-template>
                <!-- Shows the list item label in the default color and style. -->
                <Label :text="user.name" fontSize="20" marginBottom="5" marginTop="5"/>
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
const getProducers = function (app) {
    return app.producerService.getProducers().then(producers => {
        console.log(JSON.stringify(producers))
        app.$store.commit('setregisteredusers', producers.data._embedded.registeredusers);
    }).catch(error => console.log(error));
}
export default {
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
