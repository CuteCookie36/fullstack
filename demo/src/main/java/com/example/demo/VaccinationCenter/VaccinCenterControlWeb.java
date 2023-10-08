package com.example.demo.VaccinationCenter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api/public")
public class VaccinCenterControlWeb {
    
    @Autowired
    private VaccinCenterService centerService;

    @GetMapping(path = "/centers") //on aurait pu écrire PostMapping si on faisait une requete Post
    public List<VaccinationCenter> get( //on a mis get mais on aurait pu mettre n'importe quoi 
        @RequestParam(name = "city", required = false) String city){
            if(city == null){
                return centerService.findAll();
            }
            return centerService.findAllByCity(city);
        
        }
    
    @PostMapping(path = "/centers/save" )
    public VaccinationCenter save(
        @RequestBody VaccinationCenter Center  ){
            return centerService.SaveVaccinCenter(Center);
        } 


    }
