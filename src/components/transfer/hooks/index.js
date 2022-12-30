import { useState, useEffect } from 'react'

function useUntransfer(data) {
  const [untransferData, setUntransferData] = useState(data)
  
  function toggleUntransfer(event) {
    setUntransferData((prev) => {
      const result = prev.map(item => {
        if (item.label === event.target.name) {
          item.value = !item.value
          return item
        }
        return item
      })
      return result
    })
  }

  function toTransfered() {
    setUntransferData((prev) => {
      const result = prev.filter(item => item.value !== true)
      return result
    })
  }

  function fillUntransferData(val) {
    const result = val.map(v => {
      v.value = false
      return v
    })
    setUntransferData((prev) => {
      return [...prev, ...result]
    })
  }

  return [
    untransferData, 
    toggleUntransfer, 
    toTransfered,
    fillUntransferData
  ]
}

function useTransfered(allData, untransferData) {

  const [transferedData, setTransferedData] = useState([])

  useEffect(() => {
    const result = allData.filter((allItem) => {
      return !untransferData.includes(allItem)
    }) 
    setTransferedData(() => {
      return result.map(item => {
        item.value = false
        return item
      })
    })
  }, [untransferData])

  function toggleTransfered(event) {
    setTransferedData((prev) => {
      const result = prev.map(item => {
        if (item.label === event.target.name) {
          item.value = !item.value
          return item
        }
        return item
      })
      return result
    })
  }

  function toUntransfer() {
    setTransferedData((prev) => {
      const result = prev.filter(item => item.value !== true)
      return result
    })
  }

  return [
    transferedData,
    toggleTransfered,
    toUntransfer
  ]
}

export {
  useUntransfer,
  useTransfered 
}
