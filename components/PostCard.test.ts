import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import PostCard from "@/components/PostCard.vue";

describe("PostCard.vue", () => {
    it("renders props.title and props.content correctly", () => {
        const title = "Test Title";
        const content = "This is a test content.";

        const wrapper = mount(PostCard, {
            props: {
                title,
                content,
            },
        });

        // Kiểm tra xem title có hiển thị trong <h2> hay không
        expect(wrapper.find("h2").text()).toBe(title);

        // Kiểm tra xem content có hiển thị trong <p> hay không
        expect(wrapper.find("p").text()).toBe(content);
    });
});
