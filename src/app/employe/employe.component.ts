import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent implements OnInit {
  emplform!: FormGroup;
  constructor(private fb: FormBuilder, private empl: EmployeService) {}
  fonctions: string[] = [
    'Ingénieur',
    'Directeur',
    'PDG',
    'Secrétaire',
    'Technicien',
  ];
  onSubmitForm() {
    this.empl.addNewEmploye(this.emplform.value);
  }
  onReset() {
    this.emplform.reset();
    this.emplform?.patchValue({
      matricule: 0,
      nom: 'nom',
      departement: ['IT'],
      fonction: ['Ingénieur'],
    });
  }
  ngOnInit(): void {
    this.emplform = this.fb.nonNullable.group({
      matricule: [0],
      nom: ['nom'],
      fonction: ['Ingénieur'],
      departement: ['IT'],
    });
  }
}
