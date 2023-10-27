package com.example.demo.VaccinationCenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.Reservation;
import com.example.demo.VaccinationCenter.repository.ReservationRepository;

@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservRepository;
    @Autowired
    private VaccinCenterService vaccinCenterService;

    public Reservation SaveReservation(Reservation reserv){
        //reserv.setVaccinationCenter(vaccinCenterService.findById(reserv.getVaccinationCenter().getId()));
        System.out.println("affichage erreur" + reserv.getVaccinationCenter().getId());
        
        return reservRepository.save(reserv);
    }

    public List<Reservation> findAll(){
        return reservRepository.findAll();
    }

    

}
