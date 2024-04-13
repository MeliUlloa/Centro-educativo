class Persona {
    nombre; apellido; estado_civil; nro_identificacion; rol;
    // Los "p"palabra indican los que son parametros
    constructor(pnombre, papellido, pestado_civil, pnro_identificacion) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.estado_civil = pestado_civil;
        this.nro_identificacion = pnro_identificacion;
    }
    //Metodos Getter 
    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getEstado_civil() {
        return this.estado_civil;
    }

    getNro_identificacion() {
        return this.nro_identificacion;
    }

    getRol() {
        return this.rol;
    }
    //Metodo Setter para cambiar el estado civil
    setEstado_civil(nuevo_estado_civil) {
        this.estado_civil = nuevo_estado_civil;
    }
}

//Clase de empleado que extiende desde persona 
class Empleado extends Persona {
    ano_incorporacion; numero_despacho;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion);
        this.ano_incorporacion = pano_incorporacion;
        this.numero_despacho = pnumero_despacho;

    }

    // metodo get para obtener datos y set para enviar datos
    getAno_incorporacion() {
        return this.ano_incorporacion;
    }
    getDespacho() {
        return this.numero_despacho;
    }
    setDespacho(nuevo_despacho) {
        this.numero_despacho = nuevo_despacho;
    }

}

class Estudiante extends Persona {
    curso_matriculado;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pcurso_matriculado) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion);
        this.curso_matriculado = pcurso_matriculado;
    }

    getCurso_matriculado() {
        return this.curso_matriculado;
    }
    setCurso_matriculado(nuevo_curso_matriculado) {
        this.curso_matriculado = nuevo_curso_matriculado;
    }
}

class Profesor extends Empleado {
    departamento;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho, pdepartamento) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho);
        this.departamento = pdepartamento;

    }
    getDepartamento() {
        return this.departamento;
    }
    setDepartamento(nuevo_departamento) {
        this.departamento = nuevo_departamento;
    }

}

class Personal_servicio extends Empleado {
    seccion_asignada;
    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho, pseccion_asignada) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho);
        this.seccion_asignada = pseccion_asignada;
    }
    getSeccion_asignada() {
        return this.seccion_asignada;
    }
    setSeccion_asignada(nueva_seccion_asignada) {
        this.seccion_asignada = nueva_seccion_asignada;
    }

}

class Centro_educativo {
    nombre; estudiante; profesor; lista_personal_servicio;
    constructor(pnombre) {
        this.nombre = pnombre;
        this.estudiante = [];
        this.profesor = [];
        this.lista_personal_servicio = [];
    }

    // Método para ingresar un estudiante al centro educativo
    ingresar_estudiante(estudiante) {
        this.estudiante.push(estudiante);
    }

    // Metodo para ingresar un profesor al centro educativo
    ingresar_profesor(profesor) {
        this.profesor.push(profesor);
    }

    //Metodo para ingresar un personal de servicio al centro educativo
    ingresar_personal_servicio(lista_personal_servicio) {
        this.lista_personal_servicio.push(Personal_servicio);
    }

}

// instancias de las clases estudiantes 
let meli = new Estudiante('Meli', 'Ulloa', 'Soltera', '34567876', 'Backend');
let lucas = new Estudiante('Lucas', 'García', 'Soltero', '478675345', 'Backend');
let its = new Centro_educativo('ITS');

// Ingresar estudiantes al centro educativo
its.ingresar_estudiante(meli);
its.ingresar_estudiante(lucas);


// Interacción con el usuario
let nombre = prompt("Ingrese el nombre del estudiante:");
let apellido = prompt("Ingrese el apellido del estudiante:");
let estado_civil = prompt("Ingrese el estado civil del estudiante:");
let nro_identificacion = prompt("Ingrese el número de identificación del estudiante:");
let curso_matriculado = prompt("Ingrese el curso matriculado del estudiante:");

let estudiante = new Estudiante(nombre, apellido, estado_civil, nro_identificacion, curso_matriculado);

// Obtener información de los estudiantes
console.log("Estudiantes en el centro educativo:");
its.estudiante.forEach(estudiante => {
    console.log(`${estudiante.getNombre()} ${estudiante.getApellido()}, Curso: ${estudiante.getCurso_matriculado()}`);
});

//its.ingresar_estudiante(estudiante);
//its.imprimirEstudiante();