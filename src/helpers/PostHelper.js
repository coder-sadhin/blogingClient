export const PostHelper = async (api, data) => {
    const url = `${process.env.REACT_APP_APIURL}/${api}`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = await res.json();
    return result;
}