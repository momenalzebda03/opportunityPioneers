<template>
    <div class="mt-4 mx-3">
        <h2 class="fw-bold fs-5 pb-3 border-bottom border-2 text-center text-md-start"> Open vacancies at NexaSoft</h2>
        <div
            class="mt-4 d-flex align-items-center justify-content-center justify-content-md-start gap-2 flex-column flex-md-row">
            <router-link to=""
                class="d-flex divAddNewButton text-white gap-2 justify-content-center align-items-center py-2 btn btn-success">
                <img src="/assets/images/latestJobs.png" alt="">
                <span>old jobs</span>
            </router-link>
            <div class="position-relative">
                <div class="imageSearch">
                    <input type="text" placeholder="search" class="fw-bold py-2 rounded-3 border paddingInputSearch">
                </div>
            </div>
        </div>
        <div class="mt-3" v-for="test in 3" :key="test">
            <div class="d-flex gap-3 align-items-center justify-content-between border border-1 p-3 rounded-2">
                <div class="w-100">
                    <div class="d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center">
                        <span class="fw-bold">Senior UX / UI Designer-Cairo, Egypt</span>
                        <router-link to=""
                            class="text-decoration-none colorProfile fw-bold py-1 px-2 rounded-3 d-flex align-items-center gap-2">
                            <img src="/assets/images/eyeGreen.png" alt="" class="mt-1 imageYay">
                            <span>show previous applicants</span>
                        </router-link>
                    </div>
                    <ul class="d-flex gap-2 mt-2 px-0">
                        <li>
                            <router-link to="" class="text-black divList py-1 px-2 rounded-3 text-decoration-none">
                                <span>full time</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" class="text-black divList py-1 px-2 rounded-3 text-decoration-none">
                                <span>remove</span>
                            </router-link>
                        </li>
                    </ul>
                    <div class="d-flex flex-column flex-md-row gap-2">
                        <span class="fw-bold">skills:</span>
                        <ul class="px-0 d-flex gap-2 listColor my-0">
                            <li>JavaScript (Basic)</li>
                            <li>HTML/CSS</li>
                            <li>User Research</li>
                            <li>Visual Design</li>
                        </ul>
                    </div>
                    <div class="mt-2">
                        <span class="colorProfile">October 6, 2023</span>
                    </div>
                </div>
                <div @click="openModal" class="imageMouse">
                    <img src="/assets/images/menu.png" alt="">
                </div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content modalContentSmoll">
                            <div class="modal-header border border-bottom-0 text-center justify-content-center">
                                <h5 class="modal-title" id="exampleModalLongTitle">You are reposting this job.<br>
                                    Do you want to edit it?</h5>
                            </div>
                            <div class="modal-footer justify-content-center" @click="closeModal">
                                <div class="w-100 d-flex gap-3">
                                    <button type="button" class="btn btn-success w-100">Edit</button>
                                    <button type="button" class="btn btn-outline-danger w-100">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
    nextTick(() => {
        const modalElement = document.querySelector('.modal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });
};

const closeModal = () => {
    const modalElement = document.querySelector('.modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
    showModal.value = false;
};
</script>