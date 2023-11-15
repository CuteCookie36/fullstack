package com.example.demo.VaccinationCenter.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping(path = "/centers/utilisateur") 
    public VaccinationCenter getCenterByUser(String login){
        return centerService.findByUtilisateursLogin(login);
        
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

    @GetMapping(path = "centers/reservations")
    public List<Reservation> getbyName(  
        @RequestParam(name = "lastName", required = false) String lastName){
            if(lastName == null){
                return reservService.findAll();
            }
            return reservService.findAllByLastName(lastName);
        
        }
    @GetMapping(path = "centers/reservations/vaccincenter")
    public List<Reservation> getbyVaccinCenterId(  
        @RequestParam(name = "Id", required = false) int Id){
            if(Id == 0){
                return reservService.findAll();
            }
            return reservService.findAllByVaccinationCenterId(Id);
        
        }

    @PostMapping("centers/reservation/update-valid")
    public ResponseEntity<String> updateValidForReservation(@RequestBody Map<String, Object> updateRequest) {
        int reservationId = Integer.parseInt(updateRequest.get("reservationId").toString());
        int newValidValue = (int) updateRequest.get("newValidValue");

        // Recherche de la réservation dans la base de données par son identifiant
        // Mettre à jour la valeur de la colonne "valid" pour cette réservation
        // Code pour effectuer la mise à jour dans la base de données
        reservService.updateValidForReservation(reservationId, newValidValue);
        // Réponse
        return ResponseEntity.ok("La valeur de valid pour la réservation " + reservationId + " a été mise à jour.");
    }

    }
