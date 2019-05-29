var initComponentInspector = require('./inspector-rempl/publisher/index.js')

initComponentInspector({
  isComponentRootNode: function (node) {

    var instance = this.getInstanceByNode(node)
    return instance
      ? this.getInstanceRootNode(instance) === node
      : false
  },
  getComponentNameByNode: function (node) {
    var inst = this.getInstanceByNode(node)
    return inst && inst.name || null
  },
  getInstanceByNode: function (node) {
    return window._instMap && window._instMap.get(node) || null
  },
  getInstanceRootNode: function (instance) {
    return window._instMap.get(instance) || null
  }
})
