import BlogPage from "../support/pages/blogPage.js";

describe("Get list of recent posts, check they are >10 characters & total of 5 posts", () => {
  beforeEach(() => {
    BlogPage.visit();
  });
  context("Blog page: number of posts", () => {
    it("Get list of recent posts", () => {
      BlogPage.numberOfPosts();
    });
  });

  context("Blog page: number of posts", () => {
    it("length of post should be greather than 10", () => {
      BlogPage.lengthOfPost();
    });
  });
});
