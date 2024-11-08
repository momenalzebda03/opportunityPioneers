<template>
    <div>
        <ComponentNavbarUserProfile v-model="modelValue"/>
        <div class="paddingPageProfile">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <componentCompanyNavbarSiadeParSeekWork />
                    </div>
                    <div class="col-12 col-lg-9">
                        <div class="border border-1 rounded-3 pt-4 pb-2">
                            <div class="container">
                                <div class="row rowGapJobs">
                                    <div class="col-12">
                                        <compoenntNavbarSeekingWork />
                                    </div>
                                    <div>
                                        <span class="fw-bold border-bottom border-2 pb-2 ms-2">Trending Projects</span>
                                    </div>
                                    <div class="marginRowWorkEmplloay">
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
</template>

<script setup>
import ComponentNavbarUserProfile from "@/components/folderHeader/NavbaruserProfile";
import componentCompanyNavbarSiadeParSeekWork from "/components/folderHeader/componentCompanyNavbarSiadeParSeekWork";
import centerJobsUserLeft from "/components/componentCenter/componentsWork/centerJobsUserLeft";
import compoenntNavbarSeekingWork from "/components/folderHeader/compoenntNavbarSeekingWork";

const modelValue = ref('');
</script>