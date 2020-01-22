## useData

## Usage

```js
const { data, error } = useData(api);

useEffect(() => {
  if (error) setResult(JSON.stringify(error));
  if (data) setResult(JSON.stringify(data));
}, [data, error]);
```
