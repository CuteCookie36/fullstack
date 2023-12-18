package com.example.demo.VaccinationCenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.VaccinationCenter.entity.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    
    public List<Reservation> findAllByLastNameLike(String lastName);
    public List<Reservation> findAllByVaccinationCenterId(Number Id);
    public List<Reservation> findAllByValid(int Valid);
}
