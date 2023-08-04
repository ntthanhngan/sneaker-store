const Products = require('../models/productsModel')
const pagination = require('../middleware/pagination');
const { Sequelize } = require('sequelize');

exports.getProducts = async (req, res) => {
  try {
    const { name, gender, page, limit } = req.query;

    let products;
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    let paginatedResults

    if (name) {
      products = await Products.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`,
          }, 
        },
        attributes: ['id', 'name', 'price', 'description', 'image', 'brand_id', 'type_id', 'gender'],
      });
      paginatedResults = pagination(products, parsedPage, parsedLimit);

      res.status(200).json({
        data: paginatedResults,
        pagination: {
        page: parsedPage,
        limit: parsedLimit,
        totalRows: products.length,
        },
      })
    } else if(gender){
      products = await Products.findAll({
        where: {
            gender: gender, 
            type_id: 3
        },
        attributes: ['id', 'name', 'price', 'description', 'image', 'brand_id', 'type_id', 'gender'],
        order: [
          ['createAt', 'DESC'],
        ],
      })

      paginatedResults = pagination(products, parsedPage, parsedLimit);

      res.status(200).json({
        data: paginatedResults,
        pagination: {
        page: parsedPage,
        limit: parsedLimit,
        totalRows: products.length,
        },
      });
    } else {
      products = await Products.findAll({where: {type_id: 3}});

      paginatedResults = pagination(products, parsedPage, parsedLimit);

      res.status(200).json({
        data: paginatedResults,
        pagination: {
        page: parsedPage,
        limit: parsedLimit,
        totalRows: products.length,
        },
      });
    }
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Internal Server Error');
  }
}

exports.getProductById = async(req,res)=>{
  try {
    const id = req.params.id
    const item = await Products.findOne({ where: { id: id } });

    if (item===null) {
      res.json({error: "The item doesn't exist"})
    } 
    res.status(200).json(
      item
    )
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

