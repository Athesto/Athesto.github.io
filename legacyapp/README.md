## How to Download scripts

```bash
curl -L "athesto.github.io/<folder>/<file>"

# ex: curl -L "athesto.github.io/scripts/hello.sh"
# ex: curl -L "athesto.github.io/keys/white.pub"
```

If you prefer node

```js
fetch("https://athesto.github.io/<folder>/<file>").then(file=>file.text()).then(copy)
// Ctrl+V or CMD+V

// ex: fetch('https://athesto.github.io/scripts/ddownloader.js).then(x=>x.text()).then(copy)
```
