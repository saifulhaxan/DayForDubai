<template>
    <div class="search">
        <div class="d-flex align-items-center gap-15 px-4 rounded-15 border-shadow py-2">
            <div class="imageCard">
              <figure class="mb-0">
                <img src="img/theme/girl.png" alt="Search Image" class="mw-100 w-75">
              </figure>
            </div>
            <div class="searchcontent position-relative w-100">
              <h4 class="mb-0 text-light">Share Something?</h4>
              <router-link to="./add-new-post" class="postNew"></router-link>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    name: "uploadPost"
}
</script>