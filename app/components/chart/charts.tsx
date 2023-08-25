'use client'
import { useMemo } from 'react'
import ReactChart from './react-chart'
import BarLineOption from './bar-line-option'

export const BarLineChart = () => {
  const barLineOption = useMemo(() => BarLineOption(), [])
  return <ReactChart option={barLineOption} />
}
