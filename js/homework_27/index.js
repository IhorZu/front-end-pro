'use strict';

import { POSTS_URL } from './constants.js';
import { httpRequest } from './request.js';
import { createCommentsBtn } from './create.js';

const textField = document.getElementById('text-field');

textField.addEventListener('change', (e) => {
    const postID = Number(e.target.value);

    if (postID > 0 && postID <= 100) {
        httpRequest(POSTS_URL, postID)
            .then(response => {
                const textFieldContainer = document.querySelector('.text-field-container');
                const postContainer = document.querySelector('.post');
                const postTitle = document.querySelector('.post__title');
                const postText = document.querySelector('.post__text');

                textFieldContainer.remove();
                postTitle.innerHTML = response.title;
                postText.innerHTML = response.body;

                const commentsBtn = createCommentsBtn(postID);
                postContainer.appendChild(commentsBtn);
            });
    } else {
        console.log('Incorrect post ID');
    }
});

