# The `useAuth` hook

A simple auth hook extendable with various strategies.

## Strategies

Please consult [Passport.js strategies](http://www.passportjs.org/packages/) when adding a new strategy and try to use the names suggested there.

### Default (none)

Used for demo / learning purposes.
Returns an empty auth object:

```js
auth = {
  isAuthenticated: false,
  user: {},
  login: () => {
    return "Login";
  },
  logout: () => {
    return "logout";
  },
  strategy: "none"
};
```

### Local (email + password)

Plain email and password authentication.
It's useful for testing restricted access points or protected areas in a project.

Please consult [the hook docs](./strategies/useAuthStrategyLocal/useAuthStrategyLocal.md) for details.
