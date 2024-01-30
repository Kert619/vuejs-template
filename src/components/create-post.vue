<template>
  <div class="p-3 rounded bg-white">
    <div class="mb-3">
      <!-- USER WHO POST BUTTON-->
      <button class="btn mb-2 d-flex gap-2 align-items-center">
        <VLazyImage class="rounded-circle" width="24" height="24" />
        <span class="text-sm"></span>
      </button>

      <div class="mb-3 border">
        <VLazyImage class="w-100 object-fit-cover" />
      </div>

      <!-- POST TEXT INPUT-->
      <textarea
        class="form-control overflow-y-hidden"
        rows="3"
        placeholder="What's on your mind?"
        ref="textAreaRef"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <input type="file" class="d-none" id="uploadImage" accept="image/*" />
      <button class="btn btn-danger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
          />
          <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
          />
        </svg>
      </button>
      <label class="btn btn-success" for="uploadImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-image"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path
            d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
          />
        </svg>
      </label>
      <button class="btn btn-primary">Post</button>
    </div>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
.text-sm {
  font-size: 0.8rem;
}
</style>
