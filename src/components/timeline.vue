<template>
  <div>
    <div class="mt-3 p-3 d-flex gap-3 bg-white">
      <div style="height: 300px; width: 100%; position: relative">
        <VLazyImage
          src="/bg.png"
          src-placeholder="/bg-thumbnail.png"
          class="cover-photo"
        />
        <VLazyImage class="profile-photo" width="200" height="200" />
      </div>
    </div>

    <div class="d-flex flex-column align-items-end mt-3">
      <h5 class="fw-bold"></h5>
      <div class="d-flex gap-2">
        <button class="btn btn-success btn-sm">Add Friend</button>
        <button class="btn btn-primary btn-sm">Message</button>
      </div>
    </div>

    <div class="d-flex flex-column gap-3 mt-5">
      <!-- <CreatePost></CreatePost> -->
      <!-- <Post></Post> -->
    </div>
  </div>
</template>

<style scoped>
.cover-photo {
  width: 100%;
  height: 100%;
  object-position: bottom;
}
.profile-photo {
  border-radius: 1rem;
  border: 2px solid #eee;
  position: absolute;
  left: 30px;
  bottom: -100px;
}
</style>
