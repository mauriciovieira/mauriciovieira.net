export function getLanguageFromHash(){
  let language = "en"
  if(window.location.hash){
    language = window.location.hash.substring(1)
  }

  if(language === "en"){
		return "en"
  }
  if(language === "es"){
		return "es"
  }
  if(language === "pt-BR"){
		return "pt-BR"
  }
  return "en"
}

export function toKey(query = ''){
  return query.replace(/^\.|\#|\s*/g,'')
}

export function $(el){
  return document.querySelector(el);
}

export function $$(el){
  return document.querySelectorAll(el);
}

export function resolveObjectByPath(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
}

