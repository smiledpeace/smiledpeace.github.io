export default {
  blog () {
    return {
      path: '/blog.json',
      resolve: (response, mappers) => {
        const blog = response.results[0]
        return mappers.merge({
          title: blog.title,
          labels: {
            post: blog.post_label,
            author: blog.author_label
          }
        })
      }
    }
  }
}
