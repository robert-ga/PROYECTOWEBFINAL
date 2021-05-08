const router=require('express').Router()
const { Router } = require('express')
const conexion=require('./config/conexion') //trameos la conexion

//--------asignamos todas las rutas-----------//

//get
router.get('/', (req, res)=> {
    let sql='SELECT * FROM admin'
    conexion.query(sql, (err, rows, fields)=> {
        if (err) {
            console.log(err)
        }
        else{
            res.json(rows)
        }
        

    })
})

//get un equipo
router.get('/:id', (req, res)=> {
    const {id}=req.params
    let sql='SELECT * FROM admin WHERE id = ?'
    conexion.query(sql,[id] ,(err, rows, fields)=> {
        if (err) {
            console.log("No se pudo recuperar los datos de los usuarios"+err)
        }
        else{
            res.json(rows)
        }       
    })
})

//agregar
router.post('/', (req, res)=> {
    const {nombre, apellido, nombreus, correo, password}=req.body
    let sql=`INSERT INTO admin(nombre, apellido, nombreus, correo, password) values('${nombre}','${apellido}','${nombreus}','${correo}','${password}')`
    conexion.query(sql,(err, rows, fields)=> {
        if (err) {
            console.log("no se pudo registrar al usuario "+err)
        }
        else{
            res.json({status:'Usuario aagregado!'})
        }       
    })
})

//eliminar
router.delete('/:id', (req, res)=> {
    const {id}=req.params
    let sql=`DELETE FROM admin WHERE id = '${id}'`
    conexion.query(sql,(err, rows, fields)=> {
        if (err) {
            console.log("No se pudo eliminar al usuario "+err)
        }
        else{
            res.json({status:'Usuario eliminado!'})
        }       
    })
})

//actualizar
router.put('/:id', (req, res)=> {
    const {id}=req.params
    const {nombre, apellido, nombreus, correo, password}=req.body
    let sql=`UPDATE admin set 
            nombre='${nombre}',
            apellido='${apellido}',
            nombreus='${nombreus}',
            correo='${correo}',
            password='${password}'
            WHERE id = '${id}'`
    conexion.query(sql,(err, rows, fields)=> {
        if (err) {
            console.log("no se pudo actualizar los datos del usuario "+err)
        }
        else{
            res.json({status:'Usuario actualizado!'})
        }       
    })
})



module.exports=router
