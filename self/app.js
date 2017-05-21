'use strict'

import Controller from './controller'
import View from './view'
import Store from './store'

let view = new View(window.document)
let store = new Store()
let ctrl = new Controller(view, store)
