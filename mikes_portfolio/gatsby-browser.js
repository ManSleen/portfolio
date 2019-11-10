const scrollToElement = require("scroll-to-element")

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      duration: 1000,
    })
  }
}
