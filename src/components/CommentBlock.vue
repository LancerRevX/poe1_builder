<template>
    <div class="comment-block">
        <h2>Comment for level {{ selected.level.number }}</h2>
        <textarea class="comment-block-textarea" v-model="selected.level.comment">

        </textarea>
    </div>
</template>

<script>
    export default {
        name: 'comment-block',
        props: {
            selected: Object
        }
    };
</script>

<style>
    .comment-block {
        margin: 16px 24px 16px 16px;
        display: flex;
        flex-direction: column;
    }

    .comment-block-textarea {
        width: 100%;
        height: 100%;
        resize: none;
    }
</style>
