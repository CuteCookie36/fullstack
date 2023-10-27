package com.example.demo.VaccinationCenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;

@Service
public class UtilisateurServ {
    
    @Autowired
    private UtilisateurRepo userRepo;

    public Utilisateur SaveUtilisateur(Utilisateur user){
        System.out.println("affichage erreur" + user.getId());
        
        return userRepo.save(user);
    }

    public List<Utilisateur> findAll(){
        return userRepo.findAll();
    }

    
}
