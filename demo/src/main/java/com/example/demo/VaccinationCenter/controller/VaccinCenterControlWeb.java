package com.example.demo.VaccinationCenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.VaccinationCenter.entity.Reservation;
import com.example.demo.VaccinationCenter.entity.VaccinationCenter;
import com.example.demo.VaccinationCenter.service.ReservationService;
import com.example.demo.VaccinationCenter.service.VaccinCenterService;


@RestController
@RequestMapping(value = "/api/public")
public class VaccinCenterControlWeb {
    
    @Autowired
    private VaccinCenterService centerService;
    @Autowired
    private ReservationService reservService;

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

    @PostMapping(path = "/centers/reservation" )
    public Reservation saveReservation(
        @RequestBody Reservation reserv  ){
            return reservService.SaveReservation(reserv);
        }
        
    @GetMapping(path = "/centers/reservation/")
    public List<Reservation> getReservation( ){
        return reservService.findAll();
    }


    }
