
const router = require('express').Router();
const { addThought, getThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getThought)
    .post(addThought)

// :thoughtId/reactions
router
    .route('/:thoughtId')
    .delete(removeThought)

router
    .route('/:thouhgtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;
