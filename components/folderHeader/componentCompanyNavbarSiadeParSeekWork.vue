<template>
    <div class="border border-1 rounded-3 pb-4 pt-2">
        <div class="container">
            <div class="d-flex flex-column gap-2 divSidePar">
                <div>
                    <div class="px-0 my-3 container d-flex gap-2 align-items-center">
                        <div class="d-flex flex-column position-relative">
                            <img src="/assets/images/imageCompanyPersonalInformation.png" alt="" class="w-100">
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <h2 class="fs-5 fw-bold my-0">NexaSoft</h2>
                            <span>Software Company</span>
                        </div>
                    </div>
                    <hr>
                </div>
                <div>
                    <ul class="mb-0 px-0 d-flex flex-column gap-3">
                        <li class="d-flex gap-2" v-for="(item, index) in  arrayList " :key="index">
                            <div class="d-flex gap-2 align-items-center hoverBoldList"
                                :class="{ 'activeBold': item.booleanBold }">
                                <img :src="item.icon" alt="" class="imagelistWidth">
                                <span>{{ item.title }}</span>
                            </div>
                            <div :class="{ 'divGreenNumber': item.booleanBackgroundNumber }"
                                class="text-white rounded-circle d-flex justify-content-center align-items-center">
                                <span>{{ item.numberTite }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr>
                <div>
                    <ul class="mb-0 px-0 d-flex flex-column gap-3">
                        <li class="d-flex gap-2 position-relative" v-for="(item, index) in arrayListProfile " :key="index">
                            <div class="d-flex gap-2 align-items-center hoverBoldList"
                                :class="{ 'activeBold': item.booleanBold }">
                                <img :src="item.icon" alt="" class="imagelistWidth">
                                <span>{{ item.title }}</span>
                                <div>
                                    <img class="ms-2 imagetransition" src="/assets/images/iconArrawProfile.png" alt=""
                                        :class="{ 'displayNone': item.booleanBackgroundNumber }">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const arrayList = ref([
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconNewJob.png', title: 'Trending', numberTite: '25', booleanBackgroundNumber: false, booleanBold: false },
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconApplied.png', title: 'Opened Projects', numberTite: '2', booleanBackgroundNumber: false, booleanBold: false },
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconSaved.png', title: 'Saved Projects', numberTite: '2', booleanBackgroundNumber: false, booleanBold: false },
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconFollowed.png', title: 'Followed Companies', numberTite: '2', booleanBackgroundNumber: false, booleanBold: false }
])

const arrayListProfile = ref([
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconProfile.png', title: 'My Profile ', booleanBackgroundNumber: false },
    { icon: 'http://localhost:3000/_nuxt/assets/images/iconSetteing.png', title: 'Settings', booleanBackgroundNumber: true }
])
</script>