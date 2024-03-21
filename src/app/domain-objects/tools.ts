/* eslint-disable @typescript-eslint/no-explicit-any */

import { ToastrService } from 'ngx-toastr'
import { HttpErrorResponse } from "@angular/common/http"

export const REST_SERVER_URL = 'https://worldcapp-backend.onrender.com'

//Observables 
export function handleHttpErrorResponse(error: HttpErrorResponse) {
  if (error.status == 0)
    return "Error de conexión con el servidor"
  if (error.status >= 500)
    return `Error interno del servidor: ${error.status}`
  if (error.status >= 400)
    return `Error en la solicitud: ${error.error.message}`
  console.error(error)
  return `Error no esperado en la solicitud: ${error.error.message}`
}


export function handleBussinessObservable(error: HttpErrorResponse) {
  return `No se pudo intercambiar la figurita por el siguiente motivo: ${error.error.message}`
}

export function handleBussinessPromise(error: any) {
  return `No se pudo intercambiar la figurita por el siguiente motivo: ${error.message}`
}

export function handleErrorPromise(promise: Promise<void>, toastr: ToastrService) {
  promise.catch(
    (error: HttpErrorResponse) => {
      toastr.error(handleHttpErrorResponse(error), 'Algo salio mal')
      throw new Error(handleHttpErrorResponse(error))
    }
  )
}

// .catch(
//   (error: HttpErrorResponse) => { 
//     toastr.error(handleHttpErrorResponse(error),'Algo salio mal')
//     throw new Error(handleHttpErrorResponse(error))
//   }
// ) 