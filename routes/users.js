const app = express ();
const usersController = require ("../controllers/users");
const router = express.Router;


router.get("/users", usersController.index);
router.get("/users/user1", usersController.create);








module.exports = users;