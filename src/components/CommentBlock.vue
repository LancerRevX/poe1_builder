<script src="../scripts/comment-block.js"></script>
<style src="../styles/comment-block.css"></style>
<template>
    <div class="comment-block">
        <div class="comment-inner-block">
            <span class="comment-block-title">Comment</span>
            <span class="comment-block-counter">({{ selected.comment.length }}/{{ MAX_COMMENT_LENGTH }})</span>
            <textarea class="comment-block-textarea" v-model="selected.comment" :maxlength="MAX_COMMENT_LENGTH">
            </textarea>
        </div>
    </div>
</template>
