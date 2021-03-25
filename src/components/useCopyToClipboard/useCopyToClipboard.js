import React from 'react'

const useCopyToClipboard = (text) => {
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    el.select()
    const success = document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
    return success
  }

  const [copied, setCopied] = React.useState(false)

  const copy = React.useCallback(() => {
    if (!copied) setCopied(copyToClipboard(text))
  }, [text])
  React.useEffect(() => () => setCopied(false), [text])

  return [copied, copy]
}

export default useCopyToClipboard

// EXAMPLES
// const TextCopy = (props) => {
//   const [copied, copy] = useCopyToClipboard('Lorem ipsum')
//   return (
//     <div>
//       <button onClick={copy}>Click to copy</button>
//       <span>{copied && 'Copied!'}</span>
//     </div>
//   )
// }

// ReactDOM.render(<TextCopy />, document.getElementById('root'))

// import React from 'react'
// import copy from 'copy-to-clipboard'

// export default function useCopyToClipboard(resetInterval = null) {
//   const [isCopied, setCopied] = React.useState(false)

//   const handleCopy = React.useCallback((text) => {
//     if (typeof text === 'string' || typeof text == 'number') {
//       copy(text.toString())
//       setCopied(true)
//     } else {
//       setCopied(false)
//       console.error(
//         `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
//       )
//     }
//   }, [])

//   React.useEffect(() => {
//     let timeout
//     if (isCopied && resetInterval) {
//       timeout = setTimeout(() => setCopied(false), resetInterval)
//     }
//     return () => {
//       clearTimeout(timeout)
//     }
//   }, [isCopied, resetInterval])

//   return [isCopied, handleCopy]
// }
