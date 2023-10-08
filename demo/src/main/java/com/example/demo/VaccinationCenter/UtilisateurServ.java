package com.example.demo.VaccinationCenter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurServ {
    
    @Autowired
    private UtilisateurRepo userRepo;

    public List<Utilisateur> findAllByLogin(String login){
        return userRepo.findAllByLogin(login);
    }
    public List<Utilisateur> findAll(){
        return userRepo.findAll();
    }
    public Utilisateur SaveUtilisateur(Utilisateur user){
        return userRepo.save(user);
    }
}
