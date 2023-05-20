const writerInfo = JSON.parse(localStorage.getItem('writer'));

export const BlogPostHelper = async (api, newData, images) => {
    const url = `${process.env.REACT_APP_APIURL}/${api}`;
    const info = new FormData();
    if (images[0]?.file) {
        info.append("blog_thumbnail", images[0]?.file)
    }
    if (newData.blog_title) {
        info.append("blog_title", newData.blog_title)
    }
    if (newData.post_body) {
        info.append("post_body", newData.post_body)
    }
    if (newData.post_cat) {
        info.append("post_cat", newData.post_cat)
    }

    const res = await fetch(
        url,
        {
            method: "POST",
            body: info,
            headers: {
                Authorization: `Bearer ${writerInfo.token}`
            },
        }
    );
    const response = await res.json();
    return response;
}