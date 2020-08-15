import React, { useContext } from 'react'
import LangContext from './LangContext'

export default function LangSwitch() {
  const { switchLang, lang } = useContext(LangContext)

  return (
    <div className="LangSwitch">
      <button
        className={lang === 'en-US' ? 'active' : ''}
        onClick={() => switchLang('en-US')}
      >
        EN
      </button>
      <button
        className={lang === 'zh-CN' ? 'active' : ''}
        onClick={() => switchLang('zh-CN')}
      >
        ZH
      </button>
    </div>
  )
}
