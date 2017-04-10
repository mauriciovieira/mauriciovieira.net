import { resolveObjectByPath } from './util'

var I18n = {
  translations: {
  },
  locale: '',
  t: function translate(key){
    let result = "not found"
    let translation = this.translations[this.locale]
    if(translation){
      result = resolveObjectByPath(translation, key)
    }

    return result
  }
}

const en = {
  myself: {
    about: "Software Engineer",
    contact: {
      email: 'contact@mauriciovieira.net'
    }
  }
}

const es = {
  myself: {
    about: "Ingeniero de Software",
    contact: {
      email: 'contacto@mauriciovieira.net'
    }
  }
}

const ptBR = {
  myself: {
    about: "Engenheiro de Software",
    contact: {
      email: 'contato@mauriciovieira.net'
    }
  }
}

I18n.translations["en"] = en
I18n.translations["es"] = es
I18n.translations["pt-BR"] = ptBR

export default I18n
