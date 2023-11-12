package com.example.demo.VaccinationCenter.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.Reservation;
import com.example.demo.VaccinationCenter.repository.ReservationRepository;

@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservRepository;

    
    public Reservation SaveReservation(Reservation reserv){
        //reserv.setVaccinationCenter(vaccinCenterService.findById(reserv.getVaccinationCenter().getId()));
        System.out.println("affichage erreur" + reserv.getVaccinationCenter().getId());
        
        return reservRepository.save(reserv);
    }

    public List<Reservation> findAll(){
        return reservRepository.findAll();
    }

    public List<Reservation> findAllByLastName(String lastName){
        return reservRepository.findAllByLastNameLike(lastName);
    }

    public Optional<Reservation> findById(int ID){
        return reservRepository.findById(ID);
    }

    public void updateValidForReservation(int reservationId, int newValidValue) {
        Optional<Reservation> optionalReservation = reservRepository.findById(reservationId);

        if (optionalReservation.isPresent()) {
            Reservation reservation = optionalReservation.get();
            reservation.setValid(newValidValue);
            reservRepository.save(reservation);
        } else {
            System.out.println("pas trouvé !");
            // Gérer le cas où la réservation n'est pas trouvée
            // Vous pouvez jeter une exception ou gérer cela selon votre logique métier
        }
    }
    

}
