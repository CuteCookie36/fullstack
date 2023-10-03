import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit{
    
  //name = "Hopital Central"; 
  //center?: VaccinationCenter;
  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();
/*
  
  center: VaccinationCenter = {
    id: 1,
    name: "Hopital de loup",
    adress: "4 rue des chevres",
    postalCode: "54550",
    city: "Nancy",
  }

*/
  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService){}
  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationService.getCenterById(id).subscribe(result=>this.center=result);
    }

  clearName(){
    this.center!.name = "";
  }
  isNameNotEmpty(){
    return this.center!.name.length>0;
  }
  
  
  delete(){
    this.deleted.emit(this.center);
  }

}
