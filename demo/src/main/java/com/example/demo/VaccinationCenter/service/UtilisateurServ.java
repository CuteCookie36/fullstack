package com.example.demo.VaccinationCenter.service;

import java.util.List;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.User;
import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;

@Service
public class UtilisateurServ {
    
    @Autowired
    private UtilisateurRepo userRepo;
    private static org.slf4j.Logger log = LoggerFactory.getLogger(UtilisateurServ.class);

    public Utilisateur SaveUtilisateur(Utilisateur user){
        System.out.println("affichage erreur" + user.getId());
        
        return userRepo.save(user);
    }

    public List<Utilisateur> findAll(){
        return userRepo.findAll();
    }

    public User loadUserByUsername(final String login)
            throws UsernameNotFoundException {
        log.info("recuperation de {}", login);

        java.util.Optional<Utilisateur> optionalUtilisateur = userRepo.findByLogin(login);
        if (optionalUtilisateur.isPresent()) {
            Utilisateur utilisateur = optionalUtilisateur.get();
            return new User(utilisateur.getLogin(), utilisateur.getPassword());
        } else {
            throw new UsernameNotFoundException("L'utilisateur" + login + " n'existe pas");
        }

    }

    public List<Utilisateur> findAllByLogin(String login){
        return userRepo.findAllByLogin(login);
    }

    
}
