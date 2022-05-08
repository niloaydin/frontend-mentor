<script>
import { useEventStore } from "@/stores/event";
import { mapState, mapActions } from "pinia";

export default {
  name: "Event",
  computed: {
    ...mapState(useEventStore, ["events"]),
  },
  methods: {
    ...mapActions(useEventStore, ["getEvents"]),
  },
  mounted() {
    useEventStore().getEvents();
  },
};
</script>

<template>
  <div class="container">
    <div :key="event.details" v-for="event in events">
      <div>
        <p>{{ event.status }}</p>
      </div>
      <img :src="event.image" />
    </div>
    <div :key="event.details" v-for="event in events">
      <h1>{{ event.title }}</h1>
      <p>
        {{ event.description }}
      </p>
      <div>
        <p>{{ event.date }}</p>
      </div>
      <div>
        <p>{{ event.time }}</p>
      </div>
      <button>Edit</button>
    </div>
  </div>
</template>