export const LoginHelper = async (api, data) => {
    const url = `${process.env.REACT_APP_APIURL}/${api}`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = await res.json();
    if (result.status === 200) {
        const {
            writer_id,
            writer_fullname,
            writer_email,
            writer_userName,
            profile_image
        } = result.data;
        const token = result.accessToken;
        const user = {
            writer_id,
            writer_fullname,
            writer_email,
            writer_userName,
            profile_image,
            token
        };
        localStorage.setItem("writer", JSON.stringify(user));
    }

    return result;
}