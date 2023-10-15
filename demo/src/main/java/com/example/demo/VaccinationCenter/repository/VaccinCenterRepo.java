package com.example.demo.VaccinationCenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.VaccinationCenter.entity.VaccinationCenter;

@Repository
public interface VaccinCenterRepo extends JpaRepository<VaccinationCenter, Integer> { //on choisit integer car la clé primaire est en integer

   public List<VaccinationCenter> findAllByCityLike(String city); //on créé findallbycitylike qui va correspondre à requete sql

}

