'use strict';

const router = require('express').Router();
const { Product } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
    Product.findAll({
        include: [{ all: true }]
    })
    .then(products => res.json(products))
    .catch(next);
});

router.get('/:productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => res.json(product))
    .catch(next);
});

//adding new product - admin
router.post('/', (req, res, next) => {
    Product.findOrCreate({
        where: {
            title: req.body.title,
            price: req.body.price,
            imgUrl: req.body.imgUrl,
            description: req.body.description
        }
    })
    .then(newProduct => res.json(newProduct))
    .catch(next);
});

// editing product - admin
router.put('/:productId', (req, res, next) => {
    const productId = +req.params.id;
    Product.update(req.body, {
        where: {id: productId,
        returning: true
    }})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(next);
});
