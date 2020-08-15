import React, { useState, useLayoutEffect } from 'react'

const LangContext = React.createContext({
  lang: '',
  currentLangData: {},
  switchLang: () => {},
})

export default LangContext

const langData = {
  'en-US': {
    card: {
      title: 'Title',
      genre: 'Genre',
      date: 'Release date',
      description: 'Description',
      link: 'Read more',
    },
  },
  'zh-CN': {
    card: {
      title: '标题',
      genre: '类型',
      date: '日期',
      description: '描述',
      link: '链接',
    },
  },
}

export function LangProvider(props) {
  const [lang, setLang] = useState(
    window.localStorage.getItem('appUILang') || window.navigator.language
  )

  useLayoutEffect(() => {
    const selectedLang =
      window.localStorage.getItem('appUILang') || window.navigator.language
    if (selectedLang) {
      setLang(selectedLang)
    }
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln)
    window.localStorage.setItem('appUILang', ln)
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang],
      }}
    >
      {props.children}
    </LangContext.Provider>
  )
}
