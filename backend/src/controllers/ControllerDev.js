module.exports = {
    store(req,res) {
        console.log(req.body.username);
        res.json({"status": true});
    }
}