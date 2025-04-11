const jsonStr = '{"name": "John"}'
const plain = JSON.parse(jsonStr)
plain.name = "ABCD"

const data ={
  firstName : "ABCD",
  lastName : "EFGH",
  greeting: "Hello!"
}

JSON.stringify(data)
