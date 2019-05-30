require('./dist/nerv.js')

function init (Nerv) {
  window._instMap = new Map()
  Nerv.options.afterMount = function (inst) {
    window._instMap.set(inst.dom, inst)
    window._instMap.set(inst, inst.dom)
  }
}

var ComponentInspector = {init: init}

module.exports = ComponentInspector
module.exports.default = module.exports


