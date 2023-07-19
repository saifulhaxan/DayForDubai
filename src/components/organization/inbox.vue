<template>
  <div class="inbox shadow py-3">
      <Search />
    <div
      class="d-flex w-100 px-3 flex-column py-4 border-bottom"
      v-for="(item, index) in inboxInfo"
      :key="index"
    >
      <div class="commentitem d-flex align-items-start gap-15 justify-content-between">
        <div class="inboxinfo d-flex gap-15">
          <div class="userImage">
            <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
          </div>
          <div class="commentbox w-100">
            <h3 class="mb-0 font-weight-bold">{{ item.user }}</h3>
            <h4 class="text-light">{{ item.title }}</h4>
            <p class="mb-0 text-light">{{ item.text }}</p>
          </div>
        </div>
        <div class="datBox">
          <p class="mb-0 text-light">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from './search.vue'
export default {
  name: "Inbox",
  components: {
    Search
  },
  data() {
    return {
      inboxInfo: [
        {
          user: "Admin",
          title: "Title Name",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          user: "Admin",
          title: "Title Name",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          user: "Admin",
          title: "Title Name",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          user: "Admin",
          title: "Title Name",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          user: "Admin",
          title: "Title Name",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
      ],
    };
  },
};
</script>
