package com.example.demo.VaccinationCenter;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface VaccinCenterRepo extends JpaRepository<VaccinationCenter, Integer> { //on choisit integer car la clé primaire est en integer

    //Recherche des centres d’une ville choisie (R)
    //Inscription à un centre (mail, téléphone, nom, prénom, date) (C)

    public List<VaccinationCenter> findAllByCityLike(String city); //on créé findallbycitylike qui va correspondre à requete sql

}

