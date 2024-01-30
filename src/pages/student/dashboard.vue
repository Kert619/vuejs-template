<template>
  <div class="vw-100 vh-100 d-flex flex-column overflow-auto">
    <!-- HEADER -->
    <!-- <StudentHeader></StudentHeader> -->
    <main class="flex-grow-1 container overflow-auto">
      <div class="row h-100 overflow-auto">
        <!-- LEFT SIDEBAR -->
        <div class="col h-100 overflow-auto">
          <div class="p-3 h-100 overflow-auto d-flex flex-column">
            <!-- SEARCH PERSON INPUT -->
            <div class="mb-3 position-relative">
              <input
                type="text"
                class="form-control"
                placeholder="Search person here"
              />

              <!-- SEARCH RESULT -->
              <!-- <div
                class="mb-3 bg-white position-absolute border"
                style="z-index: 9; width: 100%; max-height: 400px"
              >
                <div class="d-grid column gap-2">
                  <button
                    class="btn d-flex justify-content-start align-items-center gap-2"
                  >
                    <VLazyImage class="rounded-circle" width="24" height="24" />
                    <span class="text-sm"></span>
                  </button>
                </div>
              </div> -->
            </div>

            <!-- NAVIGATION BUTTONS -->
            <div class="flex-grow-1 overflow-auto">
              <!-- <StudentSidebar></StudentSidebar> -->
            </div>
          </div>
        </div>

        <!-- MAIN CONTENT/NEWSFEED -->
        <div
          class="col col-6 overflow-auto h-100 overflow-auto bg-body-secondary"
        >
          <div
            class="p-3 h-100 overflow-auto d-flex flex-column gap-3"
            ref="newsfeedRef"
          >
            <!-- DISPLAY CREATE POST IF USER DID NOT SEARCH A STUDENT -->
            <!-- <CreatePost></CreatePost> -->
            <!-- DISPLAY THIS POSTS IF USER DID NOT SEARCH A STUDENT -->
            <!-- <template>
              <Post></Post>
            </template> -->
            <!-- TIMELINE -->

            <!-- DISPLAY THIS TIMELINE IF USER SEARCH A STUDENT -->
            <!-- <template>
              <Timeline></Timeline>
            </template> -->
          </div>
        </div>

        <!-- RIGHT SIDEBAR -->
        <div class="col h-100 overflow-auto">
          <div class="p-3 h-100 overflow-auto d-flex flex-column">
            <!-- SEARCH FRIEND INPUT -->
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search friend here"
              />
            </div>

            <div class="flex-grow-1 overflow-auto">
              <!-- <FriendList></FriendList> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.text-sm {
  font-size: 0.8rem;
}
</style>
