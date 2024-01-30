<template>
  <div class="min-vh-100 d-flex flex-column overflow-auto">
    <!-- ADMIN NAVIGATION BAR -->
    <!-- <AdminNav></AdminNav> -->
    <div class="d-flex flex-grow-1 overflow-auto">
      <!-- <AdminSideBar></AdminSideBar> -->
      <div class="p-3 flex-grow-1">
        <h3 class="mb-4">Dashboard</h3>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card text-bg-success mb-3 h-100">
                <div class="card-header">Approved</div>
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">
                    This shows the total number of approved users
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-primary mb-3 h-100">
                <div class="card-header">Pending</div>
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">
                    This shows the total number of pending users
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-danger mb-3 h-100">
                <div class="card-header">Rejected</div>
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">
                    This shows the total number of rejected users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
