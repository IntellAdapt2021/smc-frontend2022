<template>
    <StackLayout>
        <Button @tap="$modal.close" text="Close" />  
        <Label flexGrow="1" width="100%" :text="'Buying from ' + user.name" />
    </StackLayout>
</template>

<script>
export default {
    props: ["user"]
}
</script>

<style>

</style>
