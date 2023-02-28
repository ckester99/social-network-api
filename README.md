# Social Network API

## Purpose

I built this project to practice building full stack CMS style applications using mongoDB.

## Functional Description

### The Database has the following models and fields

1. User:

    - username
    - email
    - thoughts: array of social media posts
    - friends: array of id values referencing user model

1. Thought: user created post

    - thoughtText
    - createdAt: timestamp
    - username: user that created the thought
    - reactions: array of user comments on the post

1. Reaction: user created comment

    - reactionBody
    - username: user that created comment
    - createdAt: timestamp

### API Routes

1. /api/users:

    - get: all users
    - get/id: gets one user by its id
    - post: create new user
    - put/id: updates an existing user by its id
    - delete/id: deletes user

1. /api/thoughts:

    - get: all thoughts
    - get/id: gets one thought by its id
    - post: create new thought
    - put/id: updates an existing thought by its id
    - delete/id: deletes thought

1. /api/users/[userId]/friends/[friendsUserId]:

    - post: add friendsUserId to user's friendslist and vice versa
    - delete: removes friendsUserId from user's friendslist and vice versa

1. /api/thoughts/[thoughtId]/reactions:
    - post: add new reaction
    - delete: removes reaction
