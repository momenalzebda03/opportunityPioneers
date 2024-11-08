<template>
    <div>
        <ComponentNavbarUserProfile v-model="modelValue" />
        <div class="paddingPageProfile">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <componentUserProfileNavbarSiadeParSeekWork />
                    </div>
                    <div class="col-12 col-lg-9">
                        <div class="border border-1 rounded-3 pt-4 pb-2">
                            <div class="container">
                                <div class="row rowGapJobs">
                                    <div class="col-12">
                                        <compoenntNavbarSeekingWork />
                                    </div>
                                    <div>
                                        <span class="fw-bold border-bottom border-2 pb-3 ms-2">Full-time Jobs</span>
                                        <div class="row gap-3 gap-md-0 marginRowWork">
                                            <div class="col-12 col-md-4">
                                                <centerJobsUserRight />
                                            </div>
                                            <div class="col-12 col-md-8">
                                                <div class="activeListFilter bg-transparent px-3 py-2 rounded-3">
                                                    <centerJobsUserLeft />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import ComponentNavbarUserProfile from "@/components/folderHeader/NavbaruserProfile";
import componentUserProfileNavbarSiadeParSeekWork from "/components/folderHeader/componentUserProfileNavbarSiadeParSeekWork";
import centerJobsUserRight from "/components/componentCenter/componentsWork/centerJobsUserRight";
import centerJobsUserLeft from "/components/componentCenter/componentsWork/centerJobsUserLeft";
import compoenntNavbarSeekingWork from "/components/folderHeader/compoenntNavbarSeekingWork";

const modelValue = ref('');
</script>