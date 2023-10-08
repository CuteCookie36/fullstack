package com.example.demo.VaccinationCenter;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
    
    public List<Utilisateur> findAllByLogin(String login);
}
