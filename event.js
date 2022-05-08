import { defineStore } from "pinia"

export const useEventStore = defineStore({
    id: "eventStore",
    state: () => {
        return {
            events: []
        }
    },
    actions: {
        getEvents() {
            this.events = [
                {
                    image: "https://images.squarespace-cdn.com/content/v1/5b0e12a8697a98669b4339eb/1540867709901-GI1CJJEEQP628Q06NV0J/fullsizeoutput_1d44.jpeg?format=1000w",
                    status: "In Review",
                    title: "Yoga in the Park",
                    description: "Make the most of the great outdoors as you stretch, breathe and relax in one of our free yoga classes.Classes are easy to follow and suitable for all levels, so don't be shy if you have never done AAAAAA AAAAAA AAAAAAA AAAAAA AAAAAA AAAAAAA AAAAA AAAAAAA AAAAAAAAAA",
                    date: "Wed, 26th Jan",
                    time: "5pm PST"
                },
            ]
        }
    }
})