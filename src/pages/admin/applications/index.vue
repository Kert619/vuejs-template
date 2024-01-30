<template>
  <div class="min-vh-100 d-flex flex-column overflow-auto">
    <!-- ADMIN NAVIGATION BAR -->
    <!-- <AdminNav></AdminNav> -->
    <div class="d-flex flex-grow-1 overflow-auto">
      <!-- ADMIN SIDEBAR -->
      <!-- <AdminSideBar></AdminSideBar> -->
      <!-- MAIN CONTENT -->
      <div class="p-3 flex-grow-1">
        <h3 class="mb-3">User Applications</h3>
        <div class="container">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">Student ID Num</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <!-- 0 = PENDING, 1 = APPROVED, 2 = REJECTED -->
                    <!-- DISPLAY PENDING BADGE IF USER STATUS IS PENDING -->
                    <span class="badge rounded-pill text-bg-primary"
                      >Pending</span
                    >
                    <!-- DISPLAY APPROVED BADGE IF USER STATUS IS APPROVED -->
                    <span class="badge rounded-pill text-bg-success"
                      >Approved</span
                    >
                    <!-- DISPLAY REJECTED BADGE IF USER STATUS IS REJECTED -->
                    <span class="badge rounded-pill text-bg-danger"
                      >Rejected</span
                    >
                  </td>
                  <td>
                    <div class="d-flex gap-2">
                      <a
                        href="/admin/user-applications/${user.id}"
                        class="btn btn-primary"
                        >View</a
                      >
                      <!-- DISABLE BUTTON IF USER IS APPROVED OR REJECTED -->
                      <button type="button" class="btn btn-success">
                        Approve
                      </button>
                      <button type="button" class="btn btn-danger">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
