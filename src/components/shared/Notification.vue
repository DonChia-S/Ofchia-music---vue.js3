<template lang="pug">
.container
    .columns
        .column.is-5.is-offset-4
            .notification.is-danger
                slot
</template>

<script>
export default {
  name: "PmNotification",
};
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
