<template>
  <div class="setting h-100vh">
    <div class="eventsecton">
      <div class="headBox mb-5">
        <h2 class="font-weight-900">
          <i class="el-icon-arrow-left"></i> FAQ's
        </h2>
      </div>
      <div class="eventDetail shadow p-md-5 p-2">
        <div class="col-md-7 mx-auto">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Contrary to popular belief," name="1">
              <div>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
              </div>
              <div>
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div>
                Simplify the process: keep operating process simple and
                intuitive;
              </div>
              <div>
                Definite and clear: enunciate your intentions clearly so that
                the users can quickly understand and make decisions;
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Decision making: giving advices about operations is acceptable,
                but do not make decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FAQ's",
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>
