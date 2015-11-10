import page from 'page'
import config from '../config'
import tplD3 from '../templates/d3.hbs'
import tplNotFound from '../templates/not-found.hbs'
import tplError from '../templates/error.hbs'

const content = document.getElementById('content')
let globalError = undefined

export function d3() {
  content.innerHTML = tplD3()
}

export function notFound() {
  console.log('not Found')
  content.innerHTML = tplNotFound()
}

export function internalError() {
  content.innerHTML = tplError({error: globalError})
  throw globalError
}
