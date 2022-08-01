let eleccion = 2, eleccionTarj = 2, con = 0;
const tarjeta = document.getElementById ('card')
const tarjetaCreditoHTML = document.getElementById ('card-credito')
const lista = [];
function datosTarjeta (nombre, fechaNac, dni, banco, domicilio) {
    this.nombre = prompt ('ingrese su nombre');
    this.fechaNac = prompt ('ingrese su fecha de nacimiento');
    this.dni = prompt ('ingrese su dni');
    this.banco = prompt ('ingrese el nombre de su banco');
    this.domicilio = prompt ('ingrese su domicilio');
}
eleccionTarj = prompt ('Bienvenido al simulador de Denuncia de Tarjetas ¿Desea denunciar su tarjeta de debito? Ingrese 1 para denunciar, Ingrese 0 para continuar con su tarjeta de credito')
while (eleccionTarj != 0 && eleccionTarj != 1) {
    eleccionTarj = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de debito, Ingrese 0 para continuar con su tarjeta de credito')
}
if (eleccionTarj == 1) {
    const tarjetaDebito = new datosTarjeta ();
    for (i = 0; i < 5; i++) {
        if (i == 0) {
            lista [i] = tarjetaDebito.nombre
        }
        if (i == 1) {
            lista [i] = tarjetaDebito.dni
        }
        if (i == 2) {
            lista [i] = tarjetaDebito.banco
        }
        if (i == 3) {
            lista [i] = tarjetaDebito.fechaNac
        }
        if (i == 4) {
            lista [i] = tarjetaDebito.domicilio
        }
        tarjeta.className = 'card-registrada'
        tarjeta.innerHTML = `<h2 class= "card__titulo">TARJETA DEBITO</h2> <span class="card__elementos">Titular: ${tarjetaDebito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaDebito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaDebito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaDebito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaDebito.domicilio}</span>`
    }
    alert ('usted ha ingresado los siguientes datos: ' + lista.join ("\n"))
    eleccion = prompt('Confirma la denuncia de la tarjeta de debito perteneciente al banco ' + lista[2] + ' a nombre de ' + lista[0] + '? Ingrese 1 para confirmar y 0 para desestimar')
    while (eleccion != 0 && eleccion != 1) {
        eleccion = prompt ('Opción equivocada vuelva a ingresar: 1 para confirmar denuncia, 0 para desestimarla.')
    }
    if (eleccion == 1) {
        alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva')
        tarjeta.className = 'card-registrada-denunciada'
    }
    if (eleccion == 0) {
        alert ('Denuncia desestimada')
    }
    eleccion = prompt ('Proseguimos con su tarjeta de credito. Ingrese 1 si desea denunciar la misma; ingrese 0 para finalizar simulación')
    while (eleccion != 0 && eleccion != 1) {
        eleccion = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de credito, Ingrese 0 para finalizar la simulación')
    }
    if (eleccion == 1) {
        const tarjetaCredito = new datosTarjeta ();
        for (i = 0; i < 5; i++) {
            if (i == 0) {
                lista [i] = tarjetaCredito.nombre
            }
            if (i == 1) {
                lista [i] = tarjetaCredito.dni
            }
            if (i == 2) {
                lista [i] = tarjetaCredito.banco
            }
            if (i == 3) {
                lista [i] = tarjetaCredito.fechaNac
            }
            if (i == 4) {
                lista [i] = tarjetaCredito.domicilio
            }
            tarjetaCreditoHTML.className = 'card-registrada'
            tarjetaCreditoHTML.innerHTML = `<h2 class= "card__titulo">TARJETA CREDITO</h2> <span class="card__elementos">Titular: ${tarjetaCredito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaCredito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaCredito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaCredito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaCredito.domicilio}</span>`
        }
        eleccion = prompt('Confirma la denuncia de la tarjeta de credito perteneciente al banco ' + lista[2] + ' a nombre de ' + lista[0] + '? Ingrese 1 para confirmar y 0 para desestimar')
        while (eleccion != 0 && eleccion != 1) {
            eleccion = prompt ('Opción equivocada vuelva a ingresar: 1 para confirmar denuncia, 0 para desestimarla.')
        }
        if (eleccion == 1) {
            alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva')
            tarjetaCreditoHTML.className = 'card-registrada-denunciada'
        }
    }
}
if (eleccionTarj == 0) {
eleccion = prompt ('Proseguimos con su tarjeta de credito. Ingrese 1 si desea denunciar la misma; ingrese 0 para finalizar simulación')
while (eleccion != 0 && eleccion != 1) {
    eleccion = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de credito, Ingrese 0 para finalizar la simulación')
}
    if (eleccion == 1) {
        const tarjetaCredito = new datosTarjeta ();
        for (i = 0; i < 5; i++) {
            if (i == 0) {
                lista [i] = tarjetaCredito.nombre
            }
            if (i == 1) {
                lista [i] = tarjetaCredito.dni
            }
            if (i == 2) {
                lista [i] = tarjetaCredito.banco
            }
            if (i == 3) {
                lista [i] = tarjetaCredito.fechaNac
            }
            if (i == 4) {
                lista [i] = tarjetaCredito.domicilio
            }
            tarjetaCreditoHTML.className = 'card-registrada'
            tarjetaCreditoHTML.innerHTML = `<h2 class= "card__titulo">TARJETA CREDITO</h2> <span class="card__elementos">Titular: ${tarjetaCredito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaCredito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaCredito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaCredito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaCredito.domicilio}</span>`
        }
        eleccion = prompt('Confirma la denuncia de la tarjeta de debito perteneciente al banco ' + tarjetaCredito.banco + ' a nombre de ' + tarjetaCredito.nombre + '? Ingrese 1 para confirmar y 0 para desestimar')
        while (eleccion != 0 && eleccion != 1) {
            eleccion = prompt ('Opción equivocada vuelva a ingresar: 1 para confirmar denuncia, 0 para desestimarla.')
        }
        if (eleccion == 1) {
            alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva')
            tarjetaCreditoHTML.className = 'card-registrada-denunciada'
        }
    }
}
alert ('Fin de la simulación')


