import ReactChart from './react-chart'
import PieOption from './pie-option'
import { useMemo } from 'react'

const charts = () => {
  const pieOption = useMemo(() => PieOption(), [])

  return <ReactChart option={pieOption} />
}

export default charts
