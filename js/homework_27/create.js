'use strict';

import { httpRequest } from "./request.js";
import { COMMENTS_URL } from "./constants.js";

export const createComments = (data) => {
    const commentsContainer = document.createElement('ol');
    commentsContainer.className = 'comments';

    for (let i = 0; i < data.length; i++) {
        const comment = document.createElement('li');
        const commentAuthor = document.createElement('div');
        const commentText = document.createElement('p');

        comment.className = 'comment';

        commentAuthor.className = 'comment__author';
        commentAuthor.innerHTML = data[i].name;

        commentText.className = 'comment__text';
        commentText.innerHTML = data[i].body;

        comment.append(commentAuthor, commentText);

        commentsContainer.appendChild(comment);
    }

    return commentsContainer;
}

export const createCommentsBtn = (postID) => {
    const btn = document.createElement('button');
    btn.innerText = 'Get comments';
    btn.addEventListener('click', (e) => {
        httpRequest(COMMENTS_URL, postID)
            .then(response => {
                const postContainer = document.querySelector('.post');
                const comments = createComments(response);

                e.target.remove();
                postContainer.appendChild(comments);
            });
    });

    return btn;
}
