import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class Cuentas {
    listaCuentas = [
        { user: 'rodri', password: '1234' },
        { user: 'lucas', password: '1234' },
        { user: 'masu', password: '1234' },
        { user: 'feli', password: '1234' },
        { user: 'chofy', password: '1234' }
    ]

    getAccountId(name: string) {
        return (this.listaCuentas.findIndex((cuenta) => cuenta.user == name) + 1)
    }

}