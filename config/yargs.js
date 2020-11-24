const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                })
                .command('actualizar', 'Actualiar el estado de una tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'Marca como completado o pendiente la tarea'
                    }
                })
                .command('borrar', 'Borra una tarea mandando la descripcion', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por borrar'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}