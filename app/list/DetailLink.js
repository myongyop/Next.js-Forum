'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
  let router = useRouter()
  let a = usePathname() // 경로
  let b = useSearchParams() // QueryString
  let c = useParams() 

  console.log(a, b, c)
  
  return (
    <button onClick={()=>{router.push('/')}}>버튼</button>
  )
}