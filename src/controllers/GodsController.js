const Gods = require('../models/Gods');
let message = "";
let type = "";
const Op = require('sequelize').Op

const getAll = async (req,res) =>{
    try{
      setTimeout(() => {
        message = ""
        type = ""
      }, 1000)

        const panteao = await Gods.findAll({ order: [["id", "ASC"]]})
        res.render("index", {panteao, godsPut: null, godsDel: null, message, type, godsSearch:[]})
    } catch (err){
        res.status(500).send({err: err.message})
    }
};

const cadastro = (req, res) => {
    try{
      res.render('cadastro', {message, type});  
    }catch (err){
    res.status(500).send({err: err.message})
    }
};

const create = async (req, res) =>{
    try{
       const gods = req.body;
       
       if(!gods.nome || !gods.descricao || !gods.cultura || !gods.dominio || !gods.imagem){
        message = "Preencha todos os campos para efetuar o cadastro!"
        type = "danger"
        return res.redirect("/cadastro")
       }

      await Gods.create(gods);
      message = "Deus(a) criado com sucesso!"
      type = "success"
      res.redirect("/");
      } catch (err){
      res.status(500).send({err: err.message})
      }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const panteao = await Gods.findAll({ order: [["id", "ASC"]]});
    const gods = await Gods.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        panteao,
        godsPut: gods,
        godsDel: null,
        message, 
        type,
        godsSearch:[]
      });
    } else {
      res.render("index", {
        panteao,
        godsPut: null,
        godsDel: gods,
        message, 
        type,
        godsSearch:[]
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


  const update = async (req, res) => {
    try {
      const gods = req.body;
      await Gods.update(gods, { where: { id: req.params.id } });
      message = "Deus(a) atualizado com sucesso!"
      type = "success"
      res.redirect("/");
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  };
  
  const remove = async (req, res) => {
    try {
      await Gods.destroy({ where: { id: req.params.id } });
      message = "Deus(a) apagado com sucesso!"
      type = "success"
      res.redirect("/")
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  };


  const searchByName = async (req, res) =>{
    try {
      const gods = await Gods.findAll(
        {where: {nome:{
          [Op.like]: `%${req.body.gods}%`,
        },
      },
      order: [["id", "ASC"]]
      });
      if(gods.length == 0){
        message = "Deus(a) não encontrado"
        type = "danger"
        return res.redirect("/");
      }

      res.render("index", {panteao: [], godsPut: null, godsDel: null, message, type, godsSearch: gods });

    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  };

  const detalhes = async (req, res) =>{
  try {
    const gods = await Gods.findByPk(req.params.id);
     res.render("detalhes.ejs", {gods,
     });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


module.exports = {
    getAll,
    cadastro,
    create,
    getById,
    update,
    remove,
    searchByName,
    detalhes,
};