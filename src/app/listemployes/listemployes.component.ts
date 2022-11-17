import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css'],
})
export class ListemployesComponent implements OnInit {
  lesempl!: Employe[];
  constructor(private empl: EmployeService) {}

  ngOnInit(): void {
    this.lesempl = this.empl.getEmployes();
  }
}
