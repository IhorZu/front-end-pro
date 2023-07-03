'use strict';

export async function httpRequest(url, postID) {
    const resource = url + postID;

    try {
        const response = await fetch(resource);

        if (response.ok) {
            return await response.json();
        } else {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
