<template>
    <div class="post-card">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    content: String,
});
</script>
