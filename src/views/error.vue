<style>
.rounded-15 {
    border-radius: 20px;
}
.rounded-10 {
    border-radius: 10px !important;
}

a.postionAnchor {
    top: 13px !important;
}
</style>
<template>
  <section class="section section-login my-0 p-0 d-flex justify-content-center" :style="[{'background-color':'#F7FAFA'}, {'height':'100vh'}]">
            <div class="row justify-content-center align-items-center" id="error-screen">
                <div class="col-lg-12 text-center">
                        <img src="img/theme/error.png" alt="" srcset="" class="mw-100">
                </div>
            </div>
    </section>
</template>

<script>

export default ({
    name: "Error"
})
</script>
