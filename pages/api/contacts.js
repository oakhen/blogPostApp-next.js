import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body)

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() == ""
      //extra validation
    ) {
      res.status(422).json({ message: "Invalid input" })
      return
    }
    const newMessage = {
      name,
      email,
      message,
      date: new Date().toISOString(),
    }
    let client
    try {
      client = await MongoClient.connect(
        "mongodb+srv://akki:ond2a4V7FPbJMHFI@cluster0.ohshiiu.mongodb.net/blogs?retryWrites=true&w=majority",
      )
    } catch (error) {
      res.status(500).json({ message: "Could not connect to db" })
      return
    }
    const db = client.db(/* can put the database name here */)
    try {
      const result = await db.collection("contacts").insertOne(newMessage)
      newMessage._id = result.insertedId
      console.log(result)
      res.status(201).json({ message: "success message sent" })
    } catch (error) {
      client.close()
      res.status(500).json({ message: "Date could not be saved" })
      return
    }
    client.close()
  }
}

/* error handling it has the bad error handling that's it */
