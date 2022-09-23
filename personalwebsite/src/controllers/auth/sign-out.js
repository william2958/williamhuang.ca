
const signOut = (req, res) => {
	req.logout();
	req.session = null;
	if (req.session)
		req.session.destroy()
	res.send(401);
};

module.exports = signOut;
