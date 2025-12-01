module.exports = {
  motion: new Proxy({}, {
    get: (target, prop) => (props) => {
      const Tag = typeof prop === "string" ? prop : "div"
      return <Tag {...props} />
    }
  })
}
