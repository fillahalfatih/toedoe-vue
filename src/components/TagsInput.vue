<template>
    <!-- directive -->
    <!-- <div v-text="tags"></div> -->
    <div v-if="!tags.length">You have no any tags</div>
    <!-- <div v-for="tag in tags">{{ tag }}</div> -->

    <!-- <hr> -->

    <div v-for="(tag, index) in tags">
        {{ tag }}
        <a href="#" @click.prevent="removeTag(index)">&times;</a>
    </div>

    <!-- interpolation -->
    <!-- <div>{{ tags }}</div> -->
    <!-- <pre :class="tags.includes(newTag) ? 'tags-exists' : ''">{{ newTag }}</pre> -->
    <pre :class="{ 'tags-exists': tags.includes(newTag) }">{{ newTag }}</pre>

    <input
        type="text"
        v-model.trim="newTag"
        @keydown.enter="addNewTag"
        @keydown.tab.prevent="addNewTag"
        @keydown.delete="removeLastTag"
    />

    <div>{{ tags.length }}</div>
</template>

<script>
    export default {
        data: () => ({
            tags: ["Vue", "React", "Angular"],
            newTag: "Next"
        }),
        methods: {
            addNewTag() {
                if (this.newTag) {
                    this.tags.push(this.newTag);
                    this.newTag = "";
                }
            },
            removeTag(index) {
                this.tags.splice(index, 1);
            },
            removeLastTag() {
                if (this.newTag.length === 0) {
                    this.removeTag(this.tags.length - 1);
                }
            }
        }
    }
</script>

<style scoped>
    .tags-exists {
        color: red;
        text-decoration: line-through;
    }
</style>