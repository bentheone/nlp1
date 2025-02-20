export default function handler(req, res) {
    const {id } = req.query;
    if(req.method == 'GET') {
    res.status(200).json({userId: id, message: `Fetching user ${id}`})
    }
    if (req.method === "DELETE") {
        res.status(200).json({ message: `User ${id} deleted` });
      } else {
        res.status(405).json({ error: "Method Not Allowed" });
      }

} 