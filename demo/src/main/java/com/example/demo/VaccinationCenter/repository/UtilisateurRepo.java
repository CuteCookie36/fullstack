package com.example.demo.VaccinationCenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.VaccinationCenter.entity.Utilisateur;

@Repository
public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
    
    public List<Utilisateur> findAllByLogin(String login);
}