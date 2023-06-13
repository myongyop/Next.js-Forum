import { connectDB } from "@/util/database"

export default async function List(){

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result[0].title)

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글제목</h4>
        <p>1111</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1111</p>
      </div>
    </div>
  )
}