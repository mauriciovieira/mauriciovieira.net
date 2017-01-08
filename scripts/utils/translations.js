import { resolveObjectByPath } from './util'

var I18n = {
  translations: {
  },
  locale: 'en',
  t: function translate(key){
    let result = "not found"
    let translation = this.translations[this.locale]
    if(translation){
      result = resolveObjectByPath(translation, key)
    }

    return result
  },
}

const en = {
  myself: {
    about: "Senior Software Engineer",
    contact: {
      email: 'contact@mauriciovieira.net'
    }
  }
}

const ptBR = {
  myself: {
    about: "Engenheiro de Software Sênior",
    contact: {
      email: 'contato@mauriciovieira.net'
    }
  }
}

I18n.translations["en"] = en
I18n.translations["pt-BR"] = ptBR

export default I18n
