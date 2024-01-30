<template>
  <div class="min-vh-100 d-flex flex-column overflow-auto">
    <!-- ADMIN NAVIGATION BAR -->
    <!-- <AdminNav></AdminNav> -->
    <div class="d-flex flex-grow-1 overflow-auto">
      <!-- ADMIN SIDEBAR -->
      <!-- <AdminSideBar></AdminSideBar> -->
      <!-- MAIN CONTENT -->
      <div class="p-3 flex-grow-1">
        <h3 class="mb-3">User Information</h3>
        <div class="container">
          <VLazyImage
            width="100"
            height="100"
            class="rounded-circle border mb-3"
          />

          <div class="row g-3 mb-3">
            <div class="col-md-3">
              <label class="form-label">First Name</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-3">
              <label class="form-label">Middle Name</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-3">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-3">
              <label class="form-label">Extension Name</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-4">
              <label class="form-label">Birth Date</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-4">
              <label class="form-label">Age</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-4">
              <label class="form-label">Sex</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-12">
              <label class="form-label">Address</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-6">
              <label class="form-label">Contact Number</label>
              <input type="text" class="form-control" readonly />
            </div>
            <div class="col-md-6">
              <label class="form-label">Emergency Contact Number</label>
              <input type="text" class="form-control" readonly />
            </div>
          </div>

          <a href="/admin/user-applications" class="btn btn-primary">Back</a>
        </div>
      </div>
    </div>
  </div>
</template>
