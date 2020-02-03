# use-auth

React authentication hook with pluggable strategies.

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

## This project

Gives you the authentication hook with a few strategies implemented (see them in `/src/hooks/useAuth`) and the test components associated to every strategy. (in `src/components`)

The hook depends on another hook for data fetching. Please check `/src/hooks/useData/` or https://github.com/metamn/use-data/

## Usage

1. Copy the `src/hooks` folder into your app
2. Create your own strategy or use an existing one. Remove all others.

## Documentation

See the [hook docs](./src/hooks/useAuth/useAuth.md) for details.
