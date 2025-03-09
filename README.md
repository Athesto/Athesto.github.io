## How to Download scripts

```bash
curl -L "athesto.github.io/<folder>/<file>"

# ex: curl -L "athesto.github.io/scripts/hello.sh"
# ex: curl -L "athesto.github.io/keys/white.pub"
```

If you prefer node

```node
fetch("https://athesto.github.io/<folder>/<file>").then(file=>file.text()).then(data=>console.log(data))
```
