const writerInfo = JSON.parse(localStorage.getItem('writer'));

export const ProfileUpdateHelper = async (api, data, images) => {
    const url = `${process.env.REACT_APP_APIURL}/${api}`;
    const info = new FormData();
    if (images[0]?.file) {
        info.append("profile_image", images[0]?.file)
    }

    if (data.writer_city) {
        info.append("writer_city", data.writer_city)
    }
    if (data.writer_country) {
        info.append("writer_country", data.writer_country)
    }
    if (data.writer_fullname) {
        info.append("writer_fullname", data.writer_fullname)
    }
    if (data.writer_phone) {
        info.append("writer_phone", data.writer_phone)
    }
    if (data.writer_zip) {
        info.append("writer_zip", data.writer_zip)
    }

    const res = await fetch(
        // `${process.env.REACT_APP_APIURL}/writer/profileUpdate`,
        url,
        {
            method: "PATCH",
            body: info,
            headers: {
                Authorization: `Bearer ${writerInfo.token}`
            },
        }
    );
    const response = await res.json();
    return response;
}