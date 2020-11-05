import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {

    posts: [
        {id: 1, message: 'Sick and Tired', likesCount: 11},
        {id: 2, message: 'Cat get your tongue', likesCount: 23}

    ]

};

test('post length should be incremented', () => {

    // 1. test data

    let action = addPostActionCreator('test post');

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(3);
});


test('post inner text should be \'test post\'', () => {

    // 1. test data

    let action = addPostActionCreator('test post');

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation


    expect(newState.posts[2].message).toBe('test post');
});

test('post length should be decremented after deleting one post', () => {

    // 1. test data

    let action = deletePost(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(1);
});

test('post length should not  be changed if id is incorrect', () => {

    // 1. test data

    let action = deletePost(12);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(2);
});