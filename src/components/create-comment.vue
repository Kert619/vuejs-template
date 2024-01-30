<template>
  <div>
    <!-- COMMENT INPUT -->
    <div class="d-flex gap-3 mb-3">
      <VLazyImage
        src="https://source.unsplash.com/random/300×300 "
        src-placeholder="/spinner.svg"
        class="rounded-circle"
        width="24"
        height="24"
      />
      <textarea
        class="form-control overflow-y-hidden"
        rows="3"
        placeholder="Write a comment"
        ref="textAreaRef"
      ></textarea>
    </div>

    <!-- COMMENT BUTTON -->
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-primary">Comment</button>
    </div>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
