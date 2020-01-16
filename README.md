# use-auth

React authentication hook

## Why another library?

- [Awesome React](https://github.com/enaqx/awesome-react) has one single entry for auth, with JWT
- [The most popular hook](https://usehooks.com/useAuth/) is bundled with Firebase
- The majority of search results offer hooks bundled with oAuth
- The de-facto standard [Passport.js](http://www.passportjs.org/) needs an Express backend

## Approach

1. Build a general auth hook
2. Integrate any authorization strategy like:

- email + password
- email + password + token
- and more

See the [hook docs](./src/hooks/useAuth/useAuth.md) for details.
