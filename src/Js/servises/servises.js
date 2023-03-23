const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-type': 'application/json'
        },
        body: data,

    });

    return await res.json();

};

const getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`не вдалося виконати запит`);
    }

    return await res.json();
};

export { getData };
export { postData };