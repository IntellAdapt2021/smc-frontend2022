var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
    var password2 = req.body.password2;
    var ip = req.body.ip;
    var mac = req.body.mac;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    

	if (errors) {
        res.json({"status": "error", "errors": errors});
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
                    res.json({"status": "error", "errors": [{"param": "email", "msg": "user already exists"}]});
				}
				else {
					var newUser = new User({
						name: name,
						email: email,
						username: username,
						password: password,
						ip: ip,
						mac: mac
					});
					User.createUser(newUser, function (err, user) {
                        if (err) throw err;
                        
                        var _user = {"username": user.username, "email": user.email, "ip": user.ip, "mac": user.mac};

                        res.json({"status": "registered", "user": _user});
                    });
				}
			});
		});
	}
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err) }

        if (!user) {
            res.json({"status": "success", "errors": [{"param": "username", "msg": "bad login"}]});
        } else {
            var _user = {"username": user.username, "email": user.email, "ip": user.ip, "mac": user.mac};
            
            res.json({"status": "success", "user": _user});
        }

    })
    (req, res, next);
 });

router.get('/logout', function (req, res) {
	req.logout();

    res.json({"status": "success"});
});

module.exports = router;