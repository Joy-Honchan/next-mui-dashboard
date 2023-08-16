'use client'
import React, { useEffect } from 'react'

import Grahpin, { Behaviors } from '@antv/graphin'

interface NodeType {
  id: string
  children?: NodeType[]
  style?: any
}

const { TreeCollapse } = Behaviors

const walk = (node: NodeType, callback: (node: NodeType) => void) => {
  callback(node)
  if (node.children && node.children.length !== 0) {
    node.children.forEach((n) => {
      walk(n, callback)
    })
  }
}
const CompactBox = () => {
  const [state, setState] = React.useState({
    data: null
  })
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://localhost:3000/api/examples')
      .then((res) => res.json())
      .then((res) => {
        // console.log('data', res)
        walk(res, (node) => {
          node.style = {
            label: {
              value: node.id
            }
          }
        })
        setState({
          data: res
        })
      })
  }, [])

  const { data } = state

  return (
    <div>
      {data && (
        <Grahpin
          data={data}
          fitView
          layout={{
            type: 'compactBox',
            direction: 'TB',
            getId: function getId(d: NodeType) {
              return d.id
            },
            getHeight: function getHeight() {
              return 16
            },
            getWidth: function getWidth() {
              return 16
            },
            getVGap: function getVGap() {
              return 80
            },
            getHGap: function getHGap() {
              return 50
            }
          }}
        >
          <TreeCollapse trigger="click" />
        </Grahpin>
      )}
    </div>
  )
}

export default CompactBox
