import { QueryClient } from '@tanstack/react-query'

export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client) client = new QueryClient() // 클라이언트는 한번만 만들게끔
    return client
  }
})()

const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
  method,
  path,
  body,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  // body?: { [key: string]: any }
  body?: any
  params?: any
}) => {
  try {
    // methods, path값을 받아서 fetchOption을 만듬
    const url = `${BASE_URL}${path}`
    const fethchOption: RequestInit = {
      method,
      headers: {
        'Contnet-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    }
    const res = await fetch(url, fethchOption)
    const json = await res.json()
    return json
  } catch (error) {
    console.log('error: ', error)
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
}
