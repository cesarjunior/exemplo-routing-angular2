import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'false-clientes',
  template: `<p>Clientes Works</p><router-outlet></router-outlet>`,
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
