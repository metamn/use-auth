# The `useAuth` hook

A simple auth hook extendable with various strategies.

## Strategies

Please consult [Passport.js strategies](http://www.passportjs.org/packages/) when adding a new strategy and try to use the names suggested there.

### Default (none)

Used for demo purposes.
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

### Local

Plain email and password authentication.

Please consult [README.md](./strategies/authStrategyLocal/authStrategyLocal.md)
