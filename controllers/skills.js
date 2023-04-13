import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then (skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  }
  
function newSkill(req, res) {
    res.render('skills/new')
  }
  
function create(req, res) {
console.log(req.body)
    Skill.create(req.body)
    .then( skill => {
      console.log(skill)
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.todoId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

  export {
    index,
    show,
    newSkill as new,
    create,
    deleteSkill as delete,
  }