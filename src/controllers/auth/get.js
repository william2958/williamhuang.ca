const getAdmin = ({ }) => async (req, res) => {

    return res.status(200).send({
        ...req.user
    })

};

module.exports = {
    getAdmin
};