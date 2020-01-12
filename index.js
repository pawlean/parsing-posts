// make a request for posts:
// const posts = axios.get("https://pawlean.com/wp-json/wp/v2/posts?categories=50");

// (require a local file for now)
const posts = require('./posts.json');

// posts is an array
// an array has a map method

// in the response
const extract = post => ({
  excerpt: post.excerpt.rendered,
  link: post.link,
  image: post.jetpack_featured_media_url,
});
const extracted = posts.map(extract);

/*
const renderPost = post => (
  <Post excerpt={post.excerpt} link={post.link} image={post.image} />
);
const postList = posts.map(extract).map(renderPost);
const postList = mapped.map(extracted);
*/

console.log(extracted);
