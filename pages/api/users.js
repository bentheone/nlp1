export default function helper(req, res) {
    if(req.method == 'GET') {
        res.status(200).json({message: "Fetching all users"})
    } else if(req.method == 'POST') {
        const {name} = req.body;
        res.status(201).json({massage: `User ${name} created!`})
    } else {
        res.status(405).json({message :"Method not allowed!"})
    }
}