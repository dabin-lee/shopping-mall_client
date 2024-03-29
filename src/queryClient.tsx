import { QueryClient } from '@tanstack/react-query'

export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            // cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      }) // 클라이언트는 한번만 만들게끔
    // 캐싱을 한번만 요청
    return client
  }
})()

const BASE_URL = 'https://fakestoreapi.com'
type AnyOBJ = { [key: string]: any }

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  body?: AnyOBJ
  params?: AnyOBJ
}) => {
  try {
    // methods, path값을 받아서 fetchOption을 만듬
    let url = `${BASE_URL}${path}`
    const fethchOption: RequestInit = {
      method,
      headers: {
        'Contnet-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    }

    if (params) {
      const searchParams = new URLSearchParams(params)
      url += '?' + searchParams.toString()
    }

    if (body) {
      fethchOption.body = JSON.stringify(body)
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
